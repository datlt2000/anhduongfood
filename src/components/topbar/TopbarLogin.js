import { Container, Navbar } from "react-bootstrap";
import ThemeSwither from "components/bases/ThemeSwitcher";
import {navbarType, Logo, Navigation, LoginButton } from "components/bases/TopbarComponents";

export default function TopbarLogin(props) {
    const type = props.type in navbarType ? navbarType[props.type] : {};
    return (
        <Navbar expand="lg" {...type} bg="light">
            <Container>
                <Logo src={props.logo} title={props.title} />
                <div className="d-flex flex-lg-row-reverse">
                    {props.theme ? <ThemeSwither theme="light" switch="dark" /> : null}
                    <Navigation navLink={props.navLink}>
                        <LoginButton />
                    </Navigation>
                </div>
            </Container>
        </Navbar>
    );
}