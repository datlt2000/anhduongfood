import { useEffect } from "react";
import { useState } from "react";
import { Row, Col, Container, ToggleButton } from "react-bootstrap";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import VertialCard from "./VertialCard";

export default function CardListSwitcherLayout(props) {
    const num = props.number ? props.number : 4;
    const [radioValue, setRadioValue] = useState(1);
    const [listItem, setListItem] = useState(props.listItem);

    useEffect(() => {
        const data = props.getData(props['tabs'][radioValue]);
        setListItem(data);
    }, [radioValue, props]);
    return (
        <Container>
            <h1 className='heading-title text-center'>{props.title}</h1>
            <div className="text-center m-auto my-4 opacity-75" style={{ maxWidth: '56rem' }}>
                {props.description}
            </div>
            <br />
            <div className="d-flex justify-content-center my-4">
                <ToggleButtonGroup type='radio' name="menu" style={{ border: '3px var(--bs-border-style) var(--bs-border-color)' }}
                    className="mx-auto rounded-pill p-2" defaultValue={0}>
                    {props.tabs.map((radio, idx) => (
                        <ToggleButton
                            className="px-4 py-2 rounded-pill border-0 fw-bold"
                            key={idx}
                            id={`menu-${idx}`}
                            type="radio"
                            variant='outline-primary'
                            value={idx}
                            checked={radioValue === idx}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            <Row lg={num} md={(num - 1) > 0 ? (num - 1) : 1} xs={(num - 2) > 0 ? (num - 2) : 1}>
                {listItem.map((item, index) => {
                    return (
                        <Col key={index} className="my-2">
                            <VertialCard item={item} />
                        </Col>
                    )})}
            </Row>
        </Container>
    );
}