import { Spinner } from "react-bootstrap";

export default function Loader({ color }) {
    return <h2 className='text-center mt-5'><Spinner style={{ fontSize: '20px' }} color={color} /> Loading...</h2>;
}