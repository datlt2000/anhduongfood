import React, { useEffect, useState } from "react";
import { Container, Form, Card, Col, Row, Button } from "react-bootstrap";
import { news } from "const/DressPageDemo";
import { useParams } from "react-router-dom";
import SlateEditor from "components/editor/SlateEditor/SlateEditor";

const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
]

export default function Post() {
    const [post, setPost] = useState(news[0]);
    const params = useParams();
    const id = params['postId'];
    const [value, setValue] = useState([
        {
            type: 'paragaph',
            children: [{ text: '' }],
        },
    ]);

    useEffect(() => {
        setPost(news[id - 1]);
    }, []);

    const handleEditorChange = (newValue) => {
        setValue(newValue)
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
                            <Button variant="primary" className="mx-3">Publish</Button>
                            <Button variant="warning">Edit</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}