import React, { useLayoutEffect, useRef, useState } from "react";
import { Container, Form, Card, Col, Row, Button, CloseButton, Stack } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import SlateEditor from "src/components/editor/SlateEditor/SlateEditor";
import PostService from "src/services/admin/post/PostService";
import { MdAdd } from "react-icons/md";
import ImageInput from "src/components/input/ImageInput";
import ImageList from "src/components/gallery/ImageList";
import { serializer } from "src/components/editor/SlateEditor/utils/serializer";

export default function EditPost() {
    const navigate = useNavigate();
    const params = useParams();
    const slateRef = useRef()
    const [post, setPost] = useState(null);
    const [files, setFiles] = useState([])
    const id = params['postId'];
    const [value, setValue] = useState([
        {
            type: 'paragaph',
            children: [{ text: '' }],
        },
    ]);

    useLayoutEffect(() => {
        PostService.getPost(id).then(res => {
            if (res.status === 200) {
                setPost(res.data);
                setFiles(res.data.images);
                slateRef.current.setValue(JSON.parse(res.data.content))
            }
        })
    }, [id]);
    const addFile = (event) => {
        setFiles([...files, { data: event.target.files[0] }])
    }
    const removeFile = (idx) => {
        files[idx].delete = true
        setFiles([...files])
    }
    const handleEditorChange = (newValue) => {
        setValue(newValue)
    }
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setPost((post) => ({ ...post, [name]: value }));
    }
    const handleSave = (e) => {
        e.preventDefault();
        PostService.editPost(id, { ...post, "content": JSON.stringify(value), "contentHtml": serializer(value) }, files).then(res => {
            navigate(`/admin/post/${id}`)
        })
    }
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/admin/post/" + id);
    }
    return (
        <Container fluid className="py-5 px-5">
            <h3>
                Edit Post
            </h3>
            <Row>
                <Col lg={8}>
                    <Card className="bg-white shadow-right my-4">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Post Infomation
                        </Card.Header>
                        <Card.Body className="pb-4">
                            <Form>
                                <Form.Group>
                                    <Form.Label className="fs-6">Title</Form.Label>
                                    <Form.Control name="title" type="text" value={post?.title || ""} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Description</Form.Label>
                                    <Form.Control name="description" type="text" value={post?.description || ""} placeholder="Enter Description" onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Images</Form.Label>
                                    <Stack direction="horizontal" className="pb-1 overflow-auto">
                                        <ImageInput className="me-1" icon={<MdAdd size={30} className="mx-auto mt-auto" />} onChange={addFile}>Add Photos</ImageInput>
                                        <div style={{ height: 120 }}>
                                            <ImageList rowHeight={120} columnWidth={100} cols={1}>
                                                {files.map((item, idx) => {
                                                    if (item?.delete) return null
                                                    return <ImageList.Item key={idx} cols={item.cols || 1} rows={item.rows || 1}>
                                                        <img
                                                            src={item.url ?? URL.createObjectURL(item.data)}
                                                            alt={item.title}
                                                            loading="lazy" />
                                                        <CloseButton className="position-absolute top-0 end-0 btn-close-white" onClick={() => removeFile(idx)} />
                                                    </ImageList.Item>
                                                })}
                                            </ImageList>
                                        </div>
                                    </Stack>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Author</Form.Label>
                                    <Form.Control type="text" value={post?.author || ""} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Create At</Form.Label>
                                    <Form.Control type="text" value={post?.createdAt || ""} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Status</Form.Label>
                                    <Form.Control type="text" value={post?.status || ""} disabled />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card className="bg-white shadow-right">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Post Content
                        </Card.Header>
                        <Card.Body className="pb-4">
                            <SlateEditor ref={slateRef} onChange={handleEditorChange} initialValue={value} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-white shadow-right my-4">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Post Action
                        </Card.Header>
                        <Card.Body className="pb-4">
                            <Button variant="primary" className="action-button" onClick={handleSave}>Save</Button>
                            <Button variant="warning" className="action-button" onClick={handleCancel}>Cancel</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}