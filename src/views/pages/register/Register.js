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
} from "react-bootstrap";
import bgImage from "images/bg-register.jfif";

const Register = () => {
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
											<h1 className='text-center mb-5'>Create an Account!</h1>
											<InputGroup className="mb-3">
												<Form.Control placeholder="First Name" />
												<Form.Control placeholder="Last Name" />
											</InputGroup>
											<InputGroup className="mb-3">
												<Form.Control placeholder="Email Address" autoComplete="email" />
											</InputGroup>
											<InputGroup className="mb-3">
												<Form.Control
													type="password"
													placeholder="Password"
												/>
											</InputGroup>
											<InputGroup className="mb-4">
												<Form.Control
													type="password"
													placeholder="Repeat Password"
												/>
											</InputGroup>
											<div class="d-grid gap-2 my-4">
												<Button color="primary">
													Register
												</Button>
											</div>
											<hr />
											<div class="d-grid gap-2 text-center my-4 small">
												<Link to='/forgotpass'>Forgot Password?</Link>
												<Link to="/login">Already have an account? Login!</Link>
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

export default Register
