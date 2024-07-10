import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Container, Form, Card, Col, Row, Button, Stack } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import SlateEditor from "src/components/editor/SlateEditor/SlateEditor";
import PostService from "src/services/admin/post/PostService";
import ImageList from "src/components/gallery/ImageList";
export default function PostDetail() {
    const navigate = useNavigate();
    const params = useParams();
    const slateRef = useRef()
    const id = params['postId'];
    const [post, setPost] = useState(null);
    const [value, setValue] = useState([
        {
            type: 'paragaph',
            children: [{ text: '' }],
        },
    ]);
    const reload = useCallback(() => {
        PostService.getPost(id).then(res => {
            if (res.status === 200) {
                setPost(res.data);
                slateRef.current.setValue(JSON.parse(res.data.content))
            }
        })
    }, [id])
    useLayoutEffect(() => {
        reload();
    }, [id, reload]);
    const handleEditorChange = (newValue) => {
        setValue(newValue)
    }
    const handleEdit = (e) => {
        e.preventDefault();
        navigate("/admin/post/" + id + "/edit");
    }
    const handlePushlish = (e) => {
        e.preventDefault();
        PostService.publishPost(id).then(res => {
            // todo show toast and change view
            if (res.status === 200)
                reload();
        }).catch(err => {
            // todo show toast
        })
    }
    const handleUnpushlish = (e) => {
        e.preventDefault();
        PostService.unpublishPost(id).then(res => {
            // todo show toast and change view
            if (res.status === 200)
                reload();
        }).catch(err => {
            // todo show toast
        })
    }
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/admin/post");
    }
    const handleDelete = (e) => {
        e.preventDefault();
        PostService.deletePost(id)
            .then(res => {
                if (res.status === 200) {
                    navigate(`/admin/post`)
                }
            }).catch(err => {
                // console.log(err)
            })
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
                                    <Form.Control type="text" value={post?.title || ""} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Description</Form.Label>
                                    <Form.Control name="description" value={post?.description || ""} type="text" disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Images</Form.Label>
                                    <Stack direction="horizontal" className="pb-1 overflow-auto">
                                        <div style={{ height: 120 }}>
                                            <ImageList rowHeight={120} columnWidth={100} cols={1}>
                                                {post?.images?.map((item, idx) => {
                                                    return <ImageList.Item key={idx} cols={item.cols || 1} rows={item.rows || 1}>
                                                        <img
                                                            src={item.url}
                                                            alt={item.title}
                                                            loading="lazy" />
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
                            <SlateEditor ref={slateRef} readOnly onChange={handleEditorChange} initialValue={value} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-white shadow-right my-4">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Post Action
                        </Card.Header>
                        <Card.Body className="pb-4">
                            {post?.status === "Draft" ?
                                <Button variant="success" className="action-button" onClick={handlePushlish}>Publish</Button>
                                : <Button variant="secondary" className="action-button" onClick={handleUnpushlish}>Unpublish</Button>}
                            <Button variant="primary" className="action-button" onClick={handleEdit}>Edit</Button>
                            <Button variant="warning" className="action-button" onClick={handleCancel}>Cancel</Button>
                            <Button variant="danger" className="action-button" onClick={handleDelete}>Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}