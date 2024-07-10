import { Row, Col, Container, Image } from "react-bootstrap";

export default function ReviewThreeColumnLayout(props) {
    return (
        <Container>
            <h1 className='heading-title text-center'>{props.title}</h1>
            <div className="text-center m-auto my-4 opacity-75" style={{ maxWidth: '56rem' }}>
                {props.description}
            </div>
            <br />
            <Row md={3} xs={1}>
                {props.reviews.map((item, index) => {
                    return (
                        <Col key={index} className="my-4">
                            <div className="text-dark-custom">
                                <div className="hover-zoom rounded-circle ratio ratio-1x1 mx-auto" style={{ maxWidth: '200px' }}>
                                    <Image src={item.image} />
                                </div>
                                <div className="text-center my-3">
                                    <p style={{ fontSize: '1rem', opacity: 0.7 }}>{item.review}</p>
                                    <h5>- {item.name}</h5>
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