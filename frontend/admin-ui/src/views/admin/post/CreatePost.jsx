import React, { useState } from "react";
import { Container, Form, Card, Col, Row, Button, CloseButton, Stack } from "react-bootstrap";
import { postDefault } from "src/const/DressPageDemo";
import { useNavigate } from "react-router-dom";
import SlateEditor from "src/components/editor/SlateEditor/SlateEditor";
import PostService from "src/services/admin/post/PostService";
import { MdAdd } from "react-icons/md";
import ImageInput from "src/components/input/ImageInput";
import ImageList from "src/components/gallery/ImageList";
import { serializer } from "src/components/editor/SlateEditor/utils/serializer";

export default function CreatePost() {
    const navigate = useNavigate();
    const [post, setPost] = useState(postDefault);
    const [files, setFiles] = useState([])
    const [value, setValue] = useState([
        {
            type: 'paragaph',
            children: [{ text: '' }],
        },
    ]);
    const handleEditorChange = (newValue) => {
        setValue(newValue)
    }
    const addFile = (event) => {
        setFiles([...files, { data: event.target.files[0] }])
    }
    const removeFile = (idx) => {
        files.splice(idx, 1);
        setFiles([...files])
    }
    const handleCreate = (e) => {
        e.preventDefault();
        PostService.createPost({ ...post, "content": JSON.stringify(value), "contentHtml": serializer(value) }, files)
            .then(res => {
                if (res.status === 200) {
                    navigate(`/admin/post/${res.data.id}`)
                }
            }).catch(err => {
                // console.log(err)
            })
    }
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/admin/post");
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((post) => ({ ...post, [name]: value }));
    }

    return (
        <Container fluid className="py-5 px-5">
            <h3>
                Post Detail
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
                                    <Form.Control name="title" type="text" placeholder="Enter title" onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Description</Form.Label>
                                    <Form.Control name="description" type="text" placeholder="Enter Description" onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Images</Form.Label>
                                    <Stack direction="horizontal" className="pb-1 overflow-auto">
                                        <ImageInput className="me-1" icon={<MdAdd size={30} className="mx-auto mt-auto" />} onChange={addFile}>Add Photos</ImageInput>
                                        <div style={{ height: 120 }}>
                                            <ImageList rowHeight={120} columnWidth={100} cols={1}>
                                                {files.map((item, idx) => {
                                                    return <ImageList.Item key={idx} cols={item.cols || 1} rows={item.rows || 1}>
                                                        <img
                                                            src={URL.createObjectURL(item.data)}
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
                                    <Form.Control type="text" value={post?.author} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Create At</Form.Label>
                                    <Form.Control type="text" value={new Date().toISOString().substring(0, 10) + ""} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Status</Form.Label>
                                    <Form.Control type="text" value={post?.status} disabled />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card className="bg-white shadow-right">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Post Content
                        </Card.Header>
                        <Card.Body className="pb-4">
                            <SlateEditor onChange={handleEditorChange} initialValue={value} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-white shadow-right my-4">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Post Action
                        </Card.Header>
                        <Card.Body className="pb-4">
                            <Button variant="primary" className="action-button" onClick={handleCreate}>Create</Button>
                            <Button variant="danger" className="action-button" onClick={handleCancel}>Cancel</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}