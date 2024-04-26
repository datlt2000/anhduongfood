import { Row, Col, Container } from "react-bootstrap";

export default function StatThreeColumnLayout(props) {
    return (
        <Container>
            <h1 className='heading-title text-center'>{props.title}</h1>
            <div className="text-center m-auto mt-4 mb-3 opacity-75" style={{ maxWidth: '56rem' }}>
                {props.description}
            </div>
            <br />
            <Row xs={1} lg={3}>
                {props.stats.map((feature, index) => {
                    return (
                        <Col key={index} className="text-center d-flex flex-column">
                            <h1 className="text-bold-7 mb-3">{feature.title}</h1>
                            <h4 className="opacity-75 mb-5">{feature.description}</h4>
                        </Col>
                    );
                }

                )}
            </Row>
        </Container>
    );
}