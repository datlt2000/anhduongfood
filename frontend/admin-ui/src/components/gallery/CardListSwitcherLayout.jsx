import { Container, ToggleButton } from "react-bootstrap";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import CardListLayout from "./CardListLayout";
import CardPageLayout from "./CardPageLayout";
const TabItem = ({ name, checked, onChange, variant }) => {
    return (
        <ToggleButton
            className="px-4 py-2 rounded-pill border-0 fw-bold"
            id={`menu-${name}`}
            type="radio"
            variant={variant ?? 'outline-primary'}
            checked={checked}
            onChange={onChange}
        >
            {name}
        </ToggleButton>
    )
}
const Tab = ({ children, name }) => {
    return (
        <div className="d-flex justify-content-center my-4">
            <ToggleButtonGroup type='radio' name={name} style={{ border: '3px var(--bs-border-style) var(--bs-border-color)' }}
                className="mx-auto rounded-pill p-2" defaultValue={0}>
                {children}
            </ToggleButtonGroup>
        </div>
    )
}
export default function CardListSwitcherLayout(props) {
    return (
        <Container>
            <h1 className='heading-title text-center'>{props.title}</h1>
            <div className="text-center m-auto my-4 opacity-75" style={{ maxWidth: '56rem' }}>
                {props.description}
            </div>
            <br />
            {props.children}
        </Container>
    );
}

CardListSwitcherLayout.Item = CardListLayout.Item
CardListSwitcherLayout.ListItem = CardPageLayout.ListItem
CardListSwitcherLayout.Tab = Tab
CardListSwitcherLayout.TabItem = TabItem