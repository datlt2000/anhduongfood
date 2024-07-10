import { Spinner } from "react-bootstrap";

export default function Loading({ color }) {
    return <div><Spinner style={{ fontSize: '20px' }} color={color} /></div>;
}