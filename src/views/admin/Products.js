import React from "react";
import { Card, Container, Table } from "react-bootstrap";

export default function Products() {
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
					<Table bordered hover>
						<thead>
							<tr>
								<th>Name</th>
								<th>Created</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>modbus</td>
								<td>3 month ago</td>
							</tr>
							<tr>
								<td>db-handler</td>
								<td>3 month ago</td>
							</tr>
							<tr>
								<td>aziot-agent</td>
								<td>3 month ago</td>
							</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</Container>
	);
}