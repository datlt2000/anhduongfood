import { Row, Col } from "react-bootstrap";

const imageStyle = {
    width: '100%',
    minWidth: '0px',
    borderRadius: '2rem'
}

export default function TwoColumnWithImageLayout(props) {
    return (
        <Row xs={1} lg={2} className={props.reverse ? "flex-row-reverse" : ""}>
            <Col className="d-flex align-items-center">
                <div className={!props.reverse ? "pe-5" : "ps-5"}>
                    <div className='heading-title'>{props.title}</div>
                    <br />
                    <div className='d-block mb-5'>
                        <p className="text-start opacity-75">
                            {props.description}
                        </p>
                    </div>
                    <div>
                        {props.children ? props.children : ""}
                    </div>
                </div>
            </Col>
            <Col className="d-flex align-items-center mt-5">
                <div>
                    <img style={imageStyle} src={props.image} alt="" />
                </div>
            </Col>
        </Row>
    );
}