import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container, Image, Stack } from "react-bootstrap";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function AvatarThreeColumnLayout(props) {
    return (
        <Container>
            <h1 className='heading-title text-center'>{props.title}</h1>
            <div className="text-center m-auto my-4 opacity-75" style={{ maxWidth: '56rem' }}>
                {props.description}
            </div>
            <br />
            <Row md={3} xs={1}>
                {props.authors.map((item, index) => {
                    return (
                        <Col key={index} className="my-4">
                            <div className="text-dark-custom">
                                <div className="hover-zoom rounded-circle ratio ratio-1x1 mx-auto" style={{ maxWidth: '200px' }}>
                                    <Image src={item.image} />
                                </div>
                                <div className="text-center">
                                    <div className="my-4">
                                        <h6 className="opacity-75">{item.job}</h6>
                                        <h5>{item.name}</h5>
                                    </div>
                                    <Stack direction="horizontal" gap={4} >
                                        <a href={item.facebook} className="ms-auto"><FontAwesomeIcon icon={faFacebook} /></a>
                                        <a href={item.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
                                        <a href={item.linkedin} className="me-auto"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    </Stack>
                                </div>
                            </div>
                        </Col>
                    )
                })
                }
            </Row>
        </Container>
    );
}