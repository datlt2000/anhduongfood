import React from 'react'
import { Link } from 'react-router-dom'
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	InputGroup,
	Row,
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import bgImage from "images/bg-login.jfif";

const Login = () => {
	return (
		<div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center bg-gradient-primary">
			<Container>
				<Row className="justify-content-center">
					<Col md={9}>
						<Card>
							<Card.Body className='p-0'>
								<Row className="mx-0">
									<Col lg={6} xs={0} className='bg-div' style={{ backgroundImage: `url(${bgImage})` }}>
									</Col>
									<Col lg={6} className='p-5'>
										<Form>
											<h1 className='text-center mb-5'>Login</h1>
											<InputGroup className="mb-3">
												<InputGroup.Text>
													<FontAwesomeIcon icon={faUser} />
												</InputGroup.Text>
												<Form.Control placeholder="Username" autoComplete="username"/>
											</InputGroup>
											<InputGroup className="mb-4">
												<InputGroup.Text>
													<FontAwesomeIcon icon={faLock} />
												</InputGroup.Text>
												<Form.Control
													type="password"
													placeholder="Password"
													autoComplete="current-password"
												/>
											</InputGroup>
											<div class="d-grid gap-2 my-4">
												<Button color="primary">
													Login
												</Button>
											</div>
											<hr />
											<div class="d-grid gap-2 text-center my-4 small">
												<Link to='/forgotpass'>Forgot Password?</Link>
												<Link to="/register">Create an Account!</Link>
											</div>
										</Form>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Login
