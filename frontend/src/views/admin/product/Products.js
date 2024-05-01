import React from "react";
import { Card, Container, Table, Stack, Button } from "react-bootstrap";
import { productList } from "const/DressPageDemo";
import { useNavigate } from "react-router-dom";

export default function Products() {
	const navigate = useNavigate();
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
					<Table bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Title</th>
								<th>Price</th>
								<th>Weight</th>
								<th>Expired</th>
								<th>Status</th>
								<th>Created At</th>
								<th>Updated At</th>
							</tr>
						</thead>
						<tbody>
							{productList.map((item, idx) => {
								return (
									<tr role="button" onClick={() => handleClick(item.id)} key={idx}>
										<td>{item.id}</td>
										<td>{item.title}</td>
										<td>{item.wrap}</td>
										<td>{item.weight}</td>
										<td>{item.expired}</td>
										<td>{item.status}</td>
										<td>{item.read}</td>
										<td>{item.createdAt}</td>
										<td>{item.updateAt}</td>
									</tr>);
							})}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</Container>
	);
}