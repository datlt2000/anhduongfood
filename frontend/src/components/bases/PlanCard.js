import { Card, Button } from "react-bootstrap";

const borderTop = {
    primary: {
        borderTopStyle: 'solid',
        borderTopColor: 'var(--border-primary)',
        borderTopWidth: "8px"
    },
    danger: {
        borderTopStyle: 'solid',
        borderTopColor: 'var(--border-danger)',
        borderTopWidth: "8px"
    },
    info: {
        borderTopStyle: 'solid',
        borderTopColor: 'var(--border-info)',
        borderTopWidth: "8px"
    },
    warning: {
        borderTopStyle: 'solid',
        borderTopColor: 'var(--border-warning)',
        borderTopWidth: "8px"
    },
}
export default function PlanCard(props) {
    const border = props.variant ? borderTop[props.variant] : borderTop['primary']
    return (
        <Card className={props.className + " shadow "} style={{ ...border, height: '100%' }}>
            <Card.Header className="text-center">
                <h5 className="my-4 text-dark-custom text-bold-7">{props.plan}</h5>
                <h1 className="my-4 text-dark-custom" style={{ fontWeight: 800 }}>{props.price}</h1>
                <h6 className="my-4 opacity-50 text-bold-7">{props.duration}</h6>
            </Card.Header>
            <Card.Body className="text-center">
                <h5 className="text-dark-custom text-bold-7 my-4">{props.description}</h5>
                {props.items.map((item, index) => {
                    return <p key={index} className="opacity-75">{item}</p>
                })}
            </Card.Body>
            <Card.Footer className="bg-white">
                <div className="d-grid gap-2">
                    <Button variant={props.variant} className="m-3 rounded-pill px-5 py-3" onClick={props.action}>{props.button}</Button>
                </div>
            </Card.Footer>
        </Card>
    );
}