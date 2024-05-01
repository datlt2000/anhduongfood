import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Card, Col, Row, Button } from "react-bootstrap";
import { news } from "const/DressPageDemo";
import { useParams, useNavigate } from "react-router-dom";
import SlateEditor from "components/editor/SlateEditor/SlateEditor";

export default function PostDetail() {
    const navigate = useNavigate();
    const params = useParams();
    const slateRef = useRef()
    const id = params['postId'];
    const [post, setPost] = useState(news[0]);
    const [value, setValue] = useState([
        {
            type: 'paragaph',
            children: [{ text: '' }],
        },
    ]);
    useEffect(() => {
        const po = news[id-1]
        setPost(po);
        slateRef.current.setValue(po.content)
    }, [id]);
    const handleEditorChange = (newValue) => {
        setValue(newValue)
    }
    const handleEdit = (e) => {
        e.preventDefault();
        navigate("/admin/post/" + id + "/edit");
    }
    const handlePushlish = (e) => {
        e.preventDefault();
    }
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/admin/post");
    }
    const handleDelete = (e) => {
        e.preventDefault();
        navigate("/admin/post");
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
                                    <Form.Control type="text" value={post.title} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Author</Form.Label>
                                    <Form.Control type="text" value={post.author} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Create At</Form.Label>
                                    <Form.Control type="text" value={post.createdAt} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Status</Form.Label>
                                    <Form.Control type="text" value={post.status} disabled />
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
                            <Button variant="success" className="action-button" onClick={handlePushlish}>Publish</Button>
                            <Button variant="primary" className="action-button" onClick={handleEdit}>Edit</Button>
                            <Button variant="warning" className="action-button" onClick={handleCancel}>Cancel</Button>
                            <Button variant="danger"className="action-button" onClick={handleDelete}>Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}