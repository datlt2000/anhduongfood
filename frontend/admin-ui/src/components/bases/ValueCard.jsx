import { Col, Row, Card } from 'react-bootstrap';

export default function ValueCard(props) {
    const color = props.color ? props.color : 'primary'
    return (
        <Card className={"border-left-" + color}>
            <Card.Body>
                <Row>
                    <Col className="ms-2">
                        <div className={"fs-6 fw-bold text-uppercase mb-1 text-" + color}>{props.title}</div>
                        <div className="fs-3 mb-0 text-gray-5">{props.value}</div>
                    </Col>
                    <Col xs="auto">
                        {props.icon}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}