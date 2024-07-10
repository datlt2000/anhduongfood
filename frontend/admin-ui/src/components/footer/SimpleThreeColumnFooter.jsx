import { faFacebook, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Image, Stack, Col } from "react-bootstrap";

const logoStyle = {
    width: '50px',
    marginRight: '5px'
}

const iconSize = {
    fontSize: '28px'
}

const textSize = {
    fontSize: '16px'
}

export default function SimpleThreeColumnFooter(props) {
    return (
        <Container>
            <Row>
                <Col lg={4} className="d-flex flex-column">
                    <div className="mx-auto ms-lg-0 d-flex">
                        <Image style={logoStyle} src={props.image} />
                        <span className="heading-title ms-3">{props.title}</span>
                    </div>
                    <div style={{ fontSize: '1rem' }} className="my-3">
                        {props.description}
                    </div>
                    <Stack direction="horizontal" gap={4}>
                        <div className="ms-auto ms-lg-0"></div>
                        {props.facebook ? <a href={props.facebook}><FontAwesomeIcon style={iconSize} icon={faFacebook} /></a> : null}
                        {props.twitter ? <a href={props.twitter}><FontAwesomeIcon style={iconSize} icon={faTwitter} /></a> : null}
                        {props.youtube ? <a href={props.youtube}><FontAwesomeIcon style={iconSize} icon={faYoutube} /></a> : null}
                        {props.tiktok ? <a href={props.tiktok}><FontAwesomeIcon style={iconSize} icon={faTiktok} /></a> : null}
                        <div className="me-auto"></div>
                    </Stack>
                </Col>
                <Col lg={{ span: 7, offset: 1 }}>
                    <Stack direction='horizontal' gap={3} className="mt-4">
                        <Stack direction="vertical" gap={3}>
                            <h5 className="fw-bold">Quick Links</h5>
                            <div><a className="link" href="/" style={textSize}>Blog</a></div>
                            <div><a className="link" href="/" style={textSize}>FAQs</a></div>
                            <div><a className="link" href="/" style={textSize}>Support</a></div>
                            <div><a className="link" href="/" style={textSize}>About Us</a></div>
                        </Stack>
                        <Stack direction="vertical" gap={3}>
                            <h5 className="fw-bold">Product</h5>
                            <div><a className="link" href="/" style={textSize}>Login</a></div>
                            <div><a className="link" href="/" style={textSize}>Personal</a></div>
                            <div><a className="link" href="/" style={textSize}>Bussiness</a></div>
                            <div><a className="link" href="/" style={textSize}>Team</a></div>
                        </Stack>
                        <Stack direction="vertical" gap={3}>
                            <h5 className="fw-bold">Legal</h5>
                            <div><a className="link" href="/" style={textSize}>GDPR</a></div>
                            <div><a className="link" href="/" style={textSize}>Privacy Policy</a></div>
                            <div><a className="link" href="/" style={textSize}>Terms of Service</a></div>
                            <div><a className="link" href="/" style={textSize}>Disclaimer</a></div>
                        </Stack>
                    </Stack>
                </Col>
            </Row>
            <div className="mx-auto opacity-75 text-center my-5" style={{ fontSize: '1rem' }}>
                {props.copyright}
            </div>
        </Container>
    );
}