import React from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Page500 = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <span className="clearfix">
              <h1 className="float-start display-3 me-4">500</h1>
              <h4 className="pt-3">Houston, we have a problem!</h4>
              <p className="text-body-secondary float-start">
                The page you are looking for is temporarily unavailable.
              </p>
            </span>
            <InputGroup className="input-prepend">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faMoon} />
              </InputGroup.Text>
              <Form type="text" placeholder="What are you looking for?" />
              <Button color="info">Search</Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Page500
