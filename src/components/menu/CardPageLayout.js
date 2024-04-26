import { useEffect, useState } from "react";
import { Row, Col, Container, Pagination } from "react-bootstrap";
import VertialCard from "./VertialCard";

export default function CardPageLayout(props) {
    const num = props.number ? props.number : 4;
    const [active, setActive] = useState(1);
    const [total, setTotal] = useState(10);
    const [listShowPage, setListShowPage] = useState([])

    useEffect(() => {
        const temp = [active];
        if (active > 1) {
            temp.push(active - 1);
        } else {
            temp.push(active + 2);
        }
        if (active < total) {
            temp.push(active + 1);
        }
        setListShowPage(temp.sort());
    }, [active, total]);

    return (
        <Container>
            <h1 className='heading-title text-center mb-3'>{props.title}</h1>
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
            <div className="d-flex justify-content-center my-4">
                <Pagination>
                    <Pagination.Prev />
                    {listShowPage.map((item, index) => {
                        return (
                            <Pagination.Item key={index} active={item === active}>
                                {item}
                            </Pagination.Item>
                        )
                    })}
                    <Pagination.Next />
                </Pagination>
            </div>
        </Container>
    );
}