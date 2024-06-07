import React, { useLayoutEffect, useState } from "react";
import { Card, Container, Table, Stack, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProductService from "services/admin/product/ProductService";
const STATUS_COLOR = {
	Draft: "secondary",
	Pending: "primary",
	Publish: "success"
}
export default function Products() {
	const navigate = useNavigate();
	const [products, setProducts] = useState([])
	const handleClick = (id) => {
		navigate("/admin/product/" + id);
	}
	const handleCreate = (e) => {
		e.preventDefault();
		navigate("/admin/product/create");
	}
	const handlePublish = (e) => {
		e.preventDefault();
	}
	const handleDelete = (e) => {
		e.preventDefault();
	}
	useLayoutEffect(() => {
		ProductService.getProducts().then(res => {
			if (res.status === 200) {
				setProducts(res.data)
			}
		})
	}, []);
	return (
		<Container fluid className="py-5 px-5">
			<h3>
				Products
			</h3>
			<Card className="bg-white shadow-right my-4">
				<Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
					Product List
				</Card.Header>
				<Card.Body>
					<Stack direction="horizontal" className="mb-3">
						<Button variant="primary" className="ms-auto me-2" onClick={handleCreate}>Create</Button>
						<Button variant="success" className="me-2" onClick={handlePublish}>Publish</Button>
						<Button variant="danger" className="me-2" onClick={handleDelete}>Delete</Button>
					</Stack>
					<Table striped bordered={false} hover>
						<thead>
							<tr>
								<th style={{ width: '0' }}>#</th>
								<th>Title</th>
								<th>Price</th>
								<th>Weight</th>
								<th>Expired</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{products?.map((item, idx) => {
								return (
									<tr role="button" onClick={() => handleClick(item.id)} key={idx}>
										<td style={{ width: '0' }}>{item.id}</td>
										<td>{item.title}</td>
										<td>{item.wrap}</td>
										<td>{item.weight}</td>
										<td>{item.expired}</td>
										<td><Badge pill bg={STATUS_COLOR[item.status] ?? STATUS_COLOR['Draft']}>{item.status}</Badge></td>
									</tr>);
							})}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</Container>
	);
}