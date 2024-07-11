import React, { useLayoutEffect, useRef, useState } from "react";
import { Container, Form, Card, Col, Row, Button, Stack, CloseButton } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import SlateEditor from "src/components/editor/SlateEditor/SlateEditor";
import ProductService from "src/services/admin/product/ProductService";
import { MdAdd } from "react-icons/md";
import ImageInput from "src/components/input/ImageInput";
import ImageList from "src/components/gallery/ImageList";
import { serializer } from "src/components/editor/SlateEditor/utils/serializer";

export default function EditProduct() {
    const navigate = useNavigate();
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [files, setFiles] = useState([])
    const id = params['productId'];
    const slateRef = useRef()
    const [value, setValue] = useState([
        {
            type: 'paragaph',
            children: [{ text: '' }],
        },
    ]);

    useLayoutEffect(() => {
        ProductService.getProduct(id).then(res => {
            if (res.status === 200) {
                setProduct(res.data)
                setFiles(res.data.images);
                slateRef.current.setValue(JSON.parse(res.data.description))
            }
        })
    }, [id]);
    const addFile = (event) => {
        setFiles([...files, { data: event.target.files[0] }]);
    }
    const removeFile = (idx) => {
        files[idx].delete = true;
        setFiles([...files]);
    }
    const handleEditorChange = (newValue) => {
        setValue(newValue);
    }
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setProduct((product) => ({ ...product, [name]: value }));
    }
    const handleSave = (e) => {
        e.preventDefault();
        ProductService.editProduct(id, { ...product, "description": JSON.stringify(value), "descriptionHtml": serializer(value) }, files).then(res => {
            navigate(`/product/${id}`);
        })
    }
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/product/" + id);
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
                                    <Form.Control type="text" name="title" value={product?.title || ""} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Price</Form.Label>
                                    <Form.Control type="text" name="price" value={product?.price || ""} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Wrap</Form.Label>
                                    <Form.Control type="text" name="wrap" value={product?.wrap || ""} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Weight</Form.Label>
                                    <Form.Control type="text" name="weight" value={product?.weight || ""} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Expired</Form.Label>
                                    <Form.Control type="text" name="expired" value={product?.expired || ""} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Images</Form.Label>
                                    <Stack direction="horizontal" className="pb-1 overflow-auto">
                                        <ImageInput className="me-1" icon={<MdAdd size={30} className="mx-auto mt-auto" />} onChange={addFile}>Add Photos</ImageInput>
                                        <div style={{ height: 120 }}>
                                            <ImageList rowHeight={120} columnWidth={100} cols={1}>
                                                {files.map((item, idx) => {
                                                    if (item?.delete) return null;
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
                                    <Form.Label className="fs-6">Status</Form.Label>
                                    <Form.Control type="text" value={product?.status || ""} disabled />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-6">Create At</Form.Label>
                                    <Form.Control type="text" value={product?.createdAt || ""} disabled />
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