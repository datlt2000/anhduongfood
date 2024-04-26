import { Row, Col, Button, Container, Image } from "react-bootstrap";
import appStore from 'images/apple-icon.png';
import googlePlay from 'images/google-icon.png';

const imageStyle = {
    width: '70%',
    minWidth: '0px',
    borderRadius: '2rem'
}

export default function DownloadAppLayout(props) {
    return (
        <Container>
            <Row className={props.reverse ? "flex-row-reverse" : ""}>
                <Col lg={8} className="d-flex align-items-center">
                    <div className={!props.reverse ? "pe-5" : "ps-5"}>
                        <h5 className="fw-bold" style={{ color: "rgb(236 201 75)" }}>Download app</h5>
                        <h2 className='mb-5 text-white fw-bold'>{props.title}</h2>
                        <div>
                            <Button size="lg" variant="light" className="rounded-pill fw-bold text-dark mx-3 px-4">
                                <Image src={appStore} style={{ width: '26px' }} />
                                <span className="ms-2">APP STORE</span>
                            </Button>
                            <Button size="lg" variant="light" className="rounded-pill fw-bold text-dark">
                                <Image src={googlePlay} style={{ width: '30px' }} />
                                <span className="ms-2">GOOGLE PLAY</span>
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className="d-flex align-items-center mt-5 mb-5">
                    <div>
                        <img style={imageStyle} src={props.image} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}