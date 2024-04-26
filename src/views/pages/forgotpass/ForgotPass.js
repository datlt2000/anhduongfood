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
import bgImage from "images/bg-forgotpass.jfif";

const ForgotPass = () => {
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
											<h1 className='text-center'>Forgot Your Password</h1>
                                            <p className='text-center mb-3'>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
											<InputGroup className="mb-3">
												<Form.Control size='lg' placeholder="Email Address" autoComplete="email"/>
											</InputGroup>
											<div class="d-grid gap-2 my-4">
												<Button color="primary">
													Reset Password
												</Button>
											</div>
											<hr />
											<div class="d-grid gap-2 text-center my-4 small">
												<Link to='/login'>Login</Link>
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

export default ForgotPass
