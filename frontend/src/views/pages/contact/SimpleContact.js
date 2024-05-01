import TextOnImage from 'components/layouts/TextOnImage';
import { contact } from 'const/DressPageDemo';
import { Container, Col, Form, Button } from "react-bootstrap";

export default function SimpleContact(props) {
    return (
        <div>
            <div>
                <TextOnImage image={contact.masthead.image} direction="center" padding={150} height="500px">
                    <TextOnImage.Caption {...contact["masthead"]} direction="center" position="center"></TextOnImage.Caption>
                </TextOnImage>
            </div>
            <Container>
                <Col lg={8} md={10} className='mx-auto py-5'>
                    <p>{contact.description}</p>
                    <br />
                    <Form>
                        <Form.Control type="text"
                            size="lg"
                            placeholder="Họ tên"
                            aria-label="Disabled input example" />
                        <br />
                        <Form.Control type="text"
                            size="lg"
                            placeholder="Số điện thoại"
                            aria-label="Disabled input example" />
                        <br />
                        <Form.Control type="text"
                            size="lg"
                            placeholder="Email"
                            aria-label="Disabled input example" />
                        <br />
                        <Form.Control type="text"
                            size="lg"
                            as="textarea"
                            placeholder="Nội dung"
                            aria-label="Disabled input example" />
                        <br />
                        <Button variant='primary' className='px-4' size='lg'>Send</Button>
                    </Form>
                </Col>
            </Container>
        </div>
    );
}