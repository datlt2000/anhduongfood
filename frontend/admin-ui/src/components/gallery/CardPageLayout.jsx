import { useEffect, useState } from "react";
import { Row, Container, Pagination } from "react-bootstrap";
import CardListLayout from "./CardListLayout";

const ListItem = (props) => {
    const num = props.number ? props.number : 4;
    return (
        <Row lg={num} md={(num - 1) > 0 ? (num - 1) : 1} xs={(num - 2) > 0 ? (num - 2) : 1}>
        </Row>
    )
}
const Page = (props) => {
    const [active, setActive] = useState(1);
    const [total] = useState(props.total ?? 10);
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
        setActive(props.active)
    }, [props.active, total]);
    return (
        <div className="d-flex justify-content-center my-4">
            <Pagination>
                <Pagination.Prev />
                {listShowPage.map((item, index) => {
                    return (
                        <Pagination.Item key={index} active={item === active} onClick={() => props.onClick(item)}>
                            {item}
                        </Pagination.Item>
                    )
                })}
                <Pagination.Next />
            </Pagination>
        </div>
    )
}
export default function CardPageLayout(props) {
    return (
        <Container>
            <h1 className='heading-title text-center mb-3'>{props.title}</h1>
            <br />
            {props.children}
        </Container>
    );
}

CardPageLayout.Item = CardListLayout.Item
CardPageLayout.ListItem = ListItem
CardPageLayout.Page = Page