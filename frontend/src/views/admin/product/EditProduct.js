import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Card, Col, Row, Button } from "react-bootstrap";
import { productList } from "const/DressPageDemo";
import { useParams, useNavigate } from "react-router-dom";
import SlateEditor from "components/editor/SlateEditor/SlateEditor";

export default function EditProduct() {
    const navigate = useNavigate();
    const params = useParams();
    const [product, setProduct] = useState(productList[0]);
    const id = params['productId'];
    const slateRef = useRef()
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
    const handleSave = (e) => {
        e.preventDefault();

    }
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/admin/product/" + id);
    }
    return (
        <Container fluid className="py-5 px-5">
            <h3>
                Edit Product
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
                                    <Form.Control type="text" value={product.title} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Price</Form.Label>
                                    <Form.Control type="text" value={product.price} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Wrap</Form.Label>
                                    <Form.Control type="text" value={product.wrap} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Weight</Form.Label>
                                    <Form.Control type="text" value={product.weight} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Expired</Form.Label>
                                    <Form.Control type="text" value={product.expired} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Create At</Form.Label>
                                    <Form.Control type="text" value={product.createdAt} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Status</Form.Label>
                                    <Form.Control type="text" value={product.status} />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card className="bg-white shadow-right">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Product Content
                        </Card.Header>
                        <Card.Body className="pb-4">
                            <SlateEditor ref={slateRef} onChange={handleEditorChange} initialValue={value} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-white shadow-right my-4">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Product Action
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