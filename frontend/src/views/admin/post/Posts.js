import React, { useState, useLayoutEffect } from "react";
import { Container, Table, Card, Button, Stack, Form, Badge } from "react-bootstrap";
import CustomPagination from "components/pagination/CustomPagination";
import { useNavigate } from "react-router-dom";
import PostService from "services/admin/post/PostService";

const STATUS_COLOR = {
	Draft: "secondary",
	Pending: "primary",
	Publish: "success"
}
export default function Posts() {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const [order, setOrder] = useState('asc');
	const [orderBy, setOrderBy] = useState('calories');
	const [selected, setSelected] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [total, setTotal] = useState(0);
	const pageNum = Math.ceil(total / rowsPerPage);
	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};
	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelected = posts.map((n) => n.id);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};
	const handleRowClick = (event, id) => {
		event.stopPropagation()
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}
		setSelected(newSelected);
	};
	const handleChangePage = (event, newPage) => {
		if (newPage >= 0 && newPage < pageNum)
			setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	const handleClick = (id) => {
		navigate("/admin/post/" + id);
	}
	const handleCreate = (e) => {
		e.preventDefault();
		navigate("/admin/post/create");
	}
	const handlePublish = (e) => {
		e.preventDefault();
	}
	const handleDelete = (e) => {
		e.preventDefault();

	}
	useLayoutEffect(() => {
		PostService.getPosts().then(res => {
			if (res.status === 200) {
				setPosts(res.data);
				setTotal(30);
			}
		})
	}, []);
	return (
		<Container fluid className="py-5 px-5">
			<h3>
				Blog
			</h3>
			<Card className="bg-white shadow-right my-4">
				<Card.Header className="text-primary fw-bold py-3" style={{ backgroundColor: "#f8f9fc" }}>
					Posts
				</Card.Header>
				<Card.Body>
					<Stack direction="horizontal" className="mb-3">
						<div>
							<Form.Select className="me-auto" value={rowsPerPage} onChange={handleChangeRowsPerPage}>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
							</Form.Select>
						</div>
						<Stack direction="horizontal" className=" ms-auto">
							<Button variant="primary" className="ms-auto me-2" onClick={handleCreate}>Create</Button>
							<Button variant="success" className="me-2" onClick={handlePublish}>Publish</Button>
							<Button variant="danger" className="me-2" onClick={handleDelete}>Delete</Button>
						</Stack>
					</Stack>
					<Table striped bordered={false} hover>
						<thead>
							<tr>
								<th>
									<Form.Check checked={selected.length === posts.length} onClick={handleSelectAllClick} />
								</th>
								<th style={{ width: '0' }}>ID</th>
								<th>Title</th>
								<th>Description</th>
								<th>Status</th>
								<th>Created At</th>
							</tr>
						</thead>
						<tbody>
							{posts?.map((item, idx) => {
								return (
									<tr role="button" onClick={() => handleClick(item.id)} key={idx}>
										<td>
											<Form.Check checked={selected.indexOf(item.id) !== -1} name={`item-${item.id}`} id={`post-item-${item.id}`} onClick={(event) => handleRowClick(event, item.id)} />
										</td>
										<td style={{ width: '0' }}>{item.id}</td>
										<td>{item.title}</td>
										<td>{item.description}</td>
										<td>
											<Badge pill bg={STATUS_COLOR[item.status] ?? STATUS_COLOR['Draft']}>{item.status}</Badge>
										</td>
										<td>{item.createdAt}</td>
									</tr>);
							})}
						</tbody>
					</Table>
					<Stack className="me-auto" direction="horizontal">
						<div>
							Showing {page * rowsPerPage + 1} to {(page + 1) * rowsPerPage} of {total}
						</div>
						<CustomPagination className="ms-auto my-auto" size="sm" pageNumber={pageNum} page={page} handleChangePage={handleChangePage}/>
					</Stack>
				</Card.Body>

			</Card>
		</Container >
	);
}