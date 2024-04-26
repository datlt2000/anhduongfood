import { Container, Row, Col } from "react-bootstrap";
import PlanCard from "components/bases/PlanCard";


export default function FlexiblePrice(props) {
    return (
        <Container className="d-flex flex-column">
            <h1 className="heading-title text-center">{props.title}</h1>
            <div className="text-center m-auto mt-4 mb-5 opacity-75" style={{ maxWidth: '56rem' }}>{props.description}</div>
            <Row xs={1} lg={3}>
                {props.prices.map((item, index) => {
                    return (
                        <Col key={index} className="my-4">
                            <PlanCard {...item} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}