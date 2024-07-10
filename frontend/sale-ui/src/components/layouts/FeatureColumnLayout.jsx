import { Row, Col, Container } from "react-bootstrap";

const iconStyle = {
    fontSize: '32px',
    color: 'var(--primary-color)',
    height: '80px',
    width: '80px',
    padding: '10px',
    borderRadius: '50%',
    border: 'solid 3px var(--primary-color)'
}

export default function FeatureColumnLayout(props) {
    return (
        <Container>
            <h1 className='heading-title text-center'>{props.title}</h1>
            <div className="text-center m-auto mt-4 mb-5 opacity-75" style={{ maxWidth: '56rem' }}>
                {props.description}
            </div>
            <br />
            <Row xs={1} md={props.col}>
                {props.features.map((feature, index) => {
                    return (
                        <Col key={index} className="text-center d-flex flex-column">
                            <div>
                                <div className="d-inline-block" style={iconStyle}>
                                    <span>{feature.icon}</span>
                                </div>
                            </div>
                            <h4 className="text-bold-7 mb-3 mt-4">{feature.title}</h4>
                            <p className="opacity-75" style={{ fontSize: '0.875rem' }}>{feature.description}</p>
                        </Col>
                    );
                }
                )}
            </Row>
        </Container>
    );
}