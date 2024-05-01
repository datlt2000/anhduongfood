import { Row, Col } from "react-bootstrap";
import VertialCard from "./VertialCard";

export default function CardListLayout(props) {
    const num = props.number ? props.number : 4;

    return (
        <>
            <h1 className='heading-title text-center'>{props.title}</h1>
            <div className="text-center m-auto my-4 opacity-75" style={{ maxWidth: '56rem' }}>
                {props.description}
            </div>
            <br />
            <Row lg={num} md={(num - 1) > 0 ? (num - 1) : 1} xs={(num - 2) > 0 ? (num - 2) : 1}>
                {props.listItem.map((item, index) => {
                    return (
                        <Col key={index} className="my-2">
                            <VertialCard item={item} />
                        </Col>
                    )
                })}
            </Row>
        </>
    );
}