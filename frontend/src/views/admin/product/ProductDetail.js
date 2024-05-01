import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Card, Col, Row, Button } from "react-bootstrap";
import { productList } from "const/DressPageDemo";
import { useParams, useNavigate } from "react-router-dom";
import SlateEditor from "components/editor/SlateEditor/SlateEditor";

export default function ProductDetail() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params['productId'];
    const [product, setProduct] = useState(productList[0]);
    const slateRef = useRef(null)
    const [value, setValue] = useState([
        {
            type: 'paragaph',
            children: [{ text: '' }],
        },
    ]);
    useEffect(() => {
        const prod = productList[id - 1]
        setProduct(prod)
        slateRef.current.setValue(prod.description)
    }, [id]);

    const handleEditorChange = (newValue) => {
        setValue(newValue)
    }
    const handleEdit = (e) => {
        e.preventDefault();
        navigate("/admin/product/" + id + "/edit");
    }
    const handlePushlish = (e) => {
        e.preventDefault();

    }
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/admin/product");
    }
    const handleDelete = (e) => {
        e.preventDefault();
        navigate("/admin/product");
    }
    return (
        <Container fluid className="py-5 px-5">
            <h3>
                Product Detail
            </h3>
            <Row>
                <Col lg={8}>
                    <Card className="bg-white shadow-right my-4">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Product Infomation
                        </Card.Header>
                        <Card.Body className="pb-4">
                            <Form>
                                <Form.Group>
                                    <Form.Label className="fs-6">Title</Form.Label>
                                    <Form.Control type="text" value={product.title} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Price</Form.Label>
                                    <Form.Control type="text" value={product.price} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Wrap</Form.Label>
                                    <Form.Control type="text" value={product.wrap} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Weight</Form.Label>
                                    <Form.Control type="text" value={product.weight} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Expired</Form.Label>
                                    <Form.Control type="text" value={product.expired} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Create At</Form.Label>
                                    <Form.Control type="text" value={product.createdAt} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Status</Form.Label>
                                    <Form.Control type="text" value={product.status} disabled />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card className="bg-white shadow-right">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Product Description
                        </Card.Header>
                        <Card.Body className="pb-4">
                            <SlateEditor ref={slateRef} readOnly onChange={handleEditorChange} initialValue={value} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-white shadow-right my-4">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Product Action
                        </Card.Header>
                        <Card.Body className="pb-4">
                            <Button variant="success" className="action-button" onClick={handlePushlish}>Publish</Button>
                            <Button variant="primary" className="action-button" onClick={handleEdit}>Edit</Button>
                            <Button variant="danger" className="action-button" onClick={handleDelete}>Delete</Button>
                            <Button variant="warning" className="action-button" onClick={handleCancel}>Cancel</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}
