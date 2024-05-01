import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Image, Stack, Col } from "react-bootstrap";

const logoStyle = {
    width: '150px',
    marginRight: '5px'
}

const iconSize = {
    fontSize: '28px'
}

export default function MapFooter(props) {
    return (
        <div style={{ paddingTop: "30px" }}>
            <Container>
                <Row>
                    <Col lg={4} className="d-flex flex-column">
                        <div className="mx-auto ms-lg-0 d-flex">
                            <Image style={logoStyle} src={props.image} />
                            <span className="heading-title ms-3">{props.title}</span>
                        </div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 500 }} className="my-3">
                            {props.description}
                        </div>
                    </Col>
                    <Col lg={{ span: 4 }}>
                        <Stack direction='horizontal' gap={3} className="mt-4">
                            <Stack direction="vertical" gap={3}>
                                <h5 className="fw-bold">Quick Links</h5>
                                <div className="d-flex jutify-content-center"><FontAwesomeIcon style={iconSize} icon={faLocationDot} /><span className="ms-2">{props.address}</span></div>
                                <div className="d-flex jutify-content-center"><FontAwesomeIcon style={iconSize} icon={faPhone} /><span className="ms-2">{props.phone}</span></div>
                                <div className="d-flex jutify-content-center"><FontAwesomeIcon style={iconSize} icon={faEnvelope} /><span className="ms-2">{props.email}</span></div>
                                <div className="d-flex jutify-content-center"><FontAwesomeIcon style={iconSize} icon={faFacebook} /><a href={props.facebook} className="ms-2 text-dark-custom">{props.facebook}</a></div>
                            </Stack>
                        </Stack>
                    </Col>
                    <Col lg={{ span: 4 }}>
                        <div className="h-100 d-block" style={{ backgroundColor: "#fff", padding: '0.5rem' }}>
                            <iframe id="map1" title="map1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.3998576720692!2d105.70064885749628!3d19.86351351677587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f74ef1dac9d1%3A0x5b85999bc8179f2a!2zQ8ahbSBjaMOheSDDgW5oIETGsMahbmc!5e0!3m2!1sen!2sus!4v1713254861878!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Col>
                </Row>
                <div className="mx-auto opacity-75 text-center py-5" style={{ fontSize: '1rem' }}>
                    {props.copyright}
                </div>
            </Container>
        </div>
    );
}