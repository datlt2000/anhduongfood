import { Container, Navbar } from "react-bootstrap";
import ThemeSwither from "src/components/bases/ThemeSwitcher";
import { Logo, Navigation, navbarType } from "src/components/bases/TopbarComponents";

export default function TopbarSimple(props) {
    const type = props.type in navbarType ? navbarType[props.type] : {};
    return (
        <Navbar expand="lg" {...type} bg="white">
            <Container>
                <Logo src={props.logo} title={props.title} />

                <Navigation navLink={props.navLink}>
                </Navigation>
                {props.theme ? <ThemeSwither theme="light" switch="dark" /> : null}
            </Container>
        </Navbar>
    );
}