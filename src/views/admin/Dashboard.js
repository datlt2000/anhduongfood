import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faCalendar, faDollarSign, faComment, faTrash, faPlay, faSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Row, Col, Container, Table, Button } from "react-bootstrap";
import ValueCard from "components/bases/ValueCard";

const stat = [
	{
		'title': 'Total',
		'value': '8',
		'color': 'primary',
		'icon': <FontAwesomeIcon icon={faCalendar} size="2x" className="text-black-50" style={{ opacity: '.3' }} />
	},
	{
		'title': 'Running',
		'value': '3',
		'color': 'danger',
		'icon': <FontAwesomeIcon icon={faDollarSign} size="2x" className="text-black-50" style={{ opacity: '.3' }} />
	},
	{
		'title': 'Stopped',
		'value': '5',
		'color': 'info',
		'icon': <FontAwesomeIcon icon={faClipboardList} size="2x" className="text-black-50" style={{ opacity: '.3' }} />
	},
	{
		'title': 'Images',
		'value': '8',
		'color': 'warning',
		'icon': <FontAwesomeIcon icon={faComment} size="2x" className="text-black-50" style={{ opacity: '.3' }} />
	}
]

const data = [
	{
		'name': 'modbus',
		'id': '11',
		'status': 'running'
	},
	{
		'name': 'db-handler',
		'id': '12',
		'status': 'running'
	},
	{
		'name': 'aziot-agent',
		'id': '13',
		'status': 'running'
	}
]
export default function DashBoard() {
	return (
		<Container fluid>
			<h3 className="mb-4">
				Containers
			</h3>
			<Row className="mb-5">
				{stat.map((item, idx) => {
					return <Col xl={3} md={6} key={idx}>
						<ValueCard {...item} />
					</Col>
				})}
			</Row>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, idx) => {
						return (
							<tr>
								<td>{item.name}</td>
								<td>{item.status}</td>
								<td>
									<Button className="me-2" variant="success"><FontAwesomeIcon icon={faPlay} /></Button>
									<Button className="me-2" variant="danger"><FontAwesomeIcon icon={faSquare} /></Button>
									<Button variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</Container>
	);
}