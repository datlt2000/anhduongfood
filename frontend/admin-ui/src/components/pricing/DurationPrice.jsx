import { Container, Row, Col, ToggleButton } from "react-bootstrap";
import PlanCard from "components/bases/PlanCard";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useState } from "react";
import { useEffect } from "react";

export default function DurationPrice(props) {
    const [radioValue, setRadioValue] = useState(1);
    const [listItem, setListItem] = useState([]);

    useEffect(() => {
        const data = props.getData(props['durations'][radioValue]);
        setListItem(data);
    }, [radioValue, props]);

    return (
        <Container className="d-flex flex-column">
            <h1 className="heading-title text-center">{props.title}</h1>
            <div className="text-center m-auto mt-4 mb-5 opacity-75" style={{ maxWidth: '56rem' }}>{props.description}</div>
            <div className="d-flex justify-content-center my-4">
                <ToggleButtonGroup type='radio' name="options" style={{ border: '3px var(--bs-border-style) var(--bs-border-color)' }}
                    className="mx-auto rounded-pill p-2" defaultValue={0}>
                    {props.durations.map((radio, idx) => (
                        <ToggleButton
                            className="rounded-pill px-4 py-2 border-0 fw-bold"
                            key={idx}
                            id={`duration-${idx}`}
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
            <Row xs={1} lg={3}>
                {listItem.map((item, index) => {
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