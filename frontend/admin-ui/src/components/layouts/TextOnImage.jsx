import { Container, Row, Col } from "react-bootstrap";

const directionMap = {
    "right": "text-end",
    "center": "text-center",
    "left": "text-start"
}

const positionMap = {
    "start": "justify-content-end",
    "center": "justify-content-center",
    "end": "justify-content-start"
}

const Caption = ({ heading, direction, position, subheading, postSign }) => {
    const adjustClass = directionMap[direction ? direction : "center"];
    const adjustPosition = positionMap[position ? position : "center"];
    return (
        <Container fluid>
            <Row className={adjustPosition}>
                <Col md={11} lg={7} className="mx-5 position-relative">
                    <div style={{ fontSize: "60px" }} className={"fw-bold text-white " + adjustClass}>{heading}</div>
                    <div style={{ fontSize: "24px" }} className={"text-white " + adjustClass}>{subheading}</div>
                    <div style={{ fontSize: "1.125rem" }} className={"text-white fst-italic " + adjustClass}>{postSign}</div>
                </Col>
            </Row>
        </Container>
    );
}

export default function TextOnImage({ children, image, paddingTop = "150px", paddingBottom = "150px" }) {
    return (
        <div className="masthead" style={{ backgroundImage: `url(${image})`, paddingTop: paddingTop, paddingBottom: paddingBottom }}  >
            <div className="overlay"></div>
            {children}
        </div>
    );
}
TextOnImage.Caption = Caption