import { Container, Navbar } from "react-bootstrap";
import { Logo, Navigation, navbarType } from "@/components/bases/TopbarComponents";

export default function TopbarSimple(props) {
    const type = props.type in navbarType ? navbarType[props.type] : {};
    return (
        <Navbar expand="lg" {...type} bg="white">
            <Container>
                <Logo src={props.logo} title={props.title} />

                <Navigation navLink={props.navLink}>
                </Navigation>
            </Container>
        </Navbar>
    );
}