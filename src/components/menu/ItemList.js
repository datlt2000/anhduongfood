import { Container, Row } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";

export default function ItemList(props) {
    return (
        <Container style={{ minWidth: '350px' }} className="bg-light-blue py-3">
            <h1 className='heading-title text-center'>{props.title}</h1>
            <div className="text-center m-auto my-4 opacity-75" style={{ maxWidth: '56rem' }}>
                {props.description}
            </div>
            <br />
            <Container fluid className="px-0">
                {props.listItem.map((item, index) => {
                    return (
                        <Row key={index}>
                            <HorizontalCard item={item} />
                        </Row>
                    );
                })}
            </Container>
        </Container>
    );
}