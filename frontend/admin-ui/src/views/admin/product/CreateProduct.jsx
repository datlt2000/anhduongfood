import React, { useState } from "react";
import { Container, Form, Card, Col, Row, Button, Stack, CloseButton } from "react-bootstrap";
import { productDefault } from "src/const/DressPageDemo";
import { useNavigate } from "react-router-dom";
import SlateEditor from "src/components/editor/SlateEditor/SlateEditor";
import ProductService from "src/services/admin/product/ProductService";
import { MdAdd } from "react-icons/md";
import ImageInput from "src/components/input/ImageInput";
import ImageList from "src/components/gallery/ImageList";
import { serializer } from "src/components/editor/SlateEditor/utils/serializer";

export default function CreateProduct() {
    const navigate = useNavigate()
    const [product, setProduct] = useState(productDefault);
    const [files, setFiles] = useState([])
    const [value, setValue] = useState([
        {
            type: 'paragaph',
            children: [{ text: '' }],
        },
    ])
    const handleEditorChange = (newValue) => {
        setValue(newValue)
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((product) => ({ ...product, [name]: value }));
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
        ProductService.createProduct({ ...product, "description": JSON.stringify(value), "descriptionHtml": serializer(value) }, files)
            .then(res => {
                if (res.status === 200) {
                    navigate(`/admin/product/${res.data.id}`)
                }
            }).catch(err => {
            })
    }
    const handleCancel = (e) => {
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
                                    <Form.Control type="text" name="title" placeholder="Enter Title" value={product?.title} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Price</Form.Label>
                                    <Form.Control type="text" name="price" placeholder="Enter Price" value={product?.price} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Wrap</Form.Label>
                                    <Form.Control type="text" name="wrap" placeholder="Enter Wrap" value={product?.wrap} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Weight</Form.Label>
                                    <Form.Control type="text" name="weight" placeholder="Enter Weight" value={product?.weight} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Expired</Form.Label>
                                    <Form.Control type="text" name="expired" placeholder="Enter Expired" value={product?.expired} onChange={handleChange} />
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
                                    <Form.Label className="fs-6">Status</Form.Label>
                                    <Form.Control type="text" name="status" value={product.status} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Create At</Form.Label>
                                    <Form.Control type="text" value={new Date().toISOString().substring(0, 10) + ""} disabled />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card className="bg-white shadow-right">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Product Content
                        </Card.Header>
                        <Card.Body className="pb-4">
                            <SlateEditor onChange={handleEditorChange} initialValue={value} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-white shadow-right my-4">
                        <Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
                            Product Action
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