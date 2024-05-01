import React, { useState } from "react";
import { Container, Form, Card, Col, Row, Button } from "react-bootstrap";
import { news } from "const/DressPageDemo";
import { useNavigate } from "react-router-dom";
import SlateEditor from "components/editor/SlateEditor/SlateEditor";

export default function CreatePost() {
    const navigate = useNavigate();
    const [post] = useState(news[0]);
    const [value, setValue] = useState([
        {
            type: 'paragaph',
            children: [{ text: '' }],
        },
    ]);

    const handleEditorChange = (newValue) => {
        setValue(newValue)
    }

    const handleCreate = (e) => {
        e.preventDefault();

    }
    const handleCancel = (e) => {
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
                                    <Form.Control type="text" placeholder="Enter title" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Author</Form.Label>
                                    <Form.Control type="text" value={post.author} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Create At</Form.Label>
                                    <Form.Control type="text" value={new Date().toISOString().substring(0, 10) + ""} disabled />
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