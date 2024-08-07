import React, { useState, useLayoutEffect, useCallback } from "react";
import { Container, Table, Card, Button, Stack, Form, Badge } from "react-bootstrap";
import CustomPagination from "src/components/pagination/CustomPagination";
import { useNavigate } from "react-router-dom";
import PostService from "src/services/admin/post/PostService";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const STATUS_COLOR = {
	Draft: "secondary",
	Pending: "primary",
	Published: "success"
}
const header = [
	{
		title: "Id",
		property: "id"
	},
	{
		title: "Title",
		property: "title"
	},
	{
		title: "Description",
		property: "description"
	},
	{
		title: "Status",
		property: "status"
	},
	{
		title: "Create At",
		property: "createdAt"
	}
]
export default function Posts() {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const [order, setOrder] = useState('asc');
	const [orderBy, setOrderBy] = useState('id');
	const [selected, setSelected] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [total, setTotal] = useState(0);
	const pageNum = Math.ceil(total / rowsPerPage);
	const handleRequestSort = (property) => {
		const isAsc = orderBy === property && order === 'asc';
		// console.log(property)
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
		setSelected([]);
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
		navigate("/post/" + id);
	}
	const handleCreate = (e) => {
		e.preventDefault();
		navigate("/post/create");
	}
	const handlePublish = (e) => {
		e.preventDefault();
		PostService.publishPosts(selected).then(res => {
			// todo show toast and change view
			if (res.status === 200)
				reload();
		}).catch(err => {
			// todo show toast
		})
	}
	const handleUnpublish = (e) => {
		e.preventDefault();
		PostService.unpublishPosts(selected).then(res => {
			// todo show toast and change view
			if (res.status === 200)
				reload();
		}).catch(err => {
			// todo show toast
		})
	}
	const handleDelete = (e) => {
		e.preventDefault();
		PostService.deletePosts(selected).then(res => {
			// todo show toast and change view
			if (res.status === 200)
				reload();
		}).catch(err => {
			// todo show toast
		})
	}
	const reload = useCallback(() => {
		const data = { orderBy: orderBy, order: order, start: page * rowsPerPage, limit: rowsPerPage }
		PostService.getPosts(data).then(res => {
			if (res.status === 200) {
				setPosts(res.data.data);
				setTotal(res.data.total);
			}
		})
	}, [orderBy, order, page, rowsPerPage])
	useLayoutEffect(() => {
		reload();
	}, [reload]);
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
						<Stack direction="horizontal" className="ms-auto">
							<Button variant="primary" className="ms-auto me-2" onClick={handleCreate}>Create</Button>
							<Button variant="success" className="me-2" onClick={handlePublish}>Publish</Button>
							<Button variant="secondary" className="me-2" onClick={handleUnpublish}>Unpublish</Button>
							<Button variant="danger" className="me-2" onClick={handleDelete}>Delete</Button>
						</Stack>
					</Stack>
					<Table striped bordered={false} hover>
						<thead>
							<tr>
								<th>
									<Form.Check checked={selected.length === posts.length} onChange={handleSelectAllClick} />
								</th>
								{header.map((item, idx) => {
									return <th key={idx}>
										<span role="button" onClick={() => { handleRequestSort(item.property) }}>
											<span className="me-1">{item.title}</span>
											{orderBy === item.property ? (order === "asc" ? <FaArrowUp /> : <FaArrowDown />)
												: <FaArrowUp style={{ visibility: "hidden" }} />}
										</span>
									</th>
								})}
							</tr>
						</thead>
						<tbody>
							{posts?.map((item, idx) => {
								return (
									<tr role="button" onClick={() => handleClick(item.id)} key={idx}>
										<td>
											<Form.Check checked={selected.indexOf(item.id) !== -1} name={`item-${item.id}`} id={`post-item-${item.id}`}
												onChange={(event) => handleRowClick(event, item.id)}
												onClick={(e) => e.stopPropagation()} />
										</td>
										<td>{item.id}</td>
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
						<CustomPagination className="ms-auto my-auto" size="sm" pageNumber={pageNum} page={page} handleChangePage={handleChangePage} />
					</Stack>
				</Card.Body>

			</Card>
		</Container >
	);
}