import { Button, Container, Navbar } from "react-bootstrap";
import ThemeSwither from "components/bases/ThemeSwitcher";
import { Logo, Navigation, navbarType } from "components/bases/TopbarComponents";

export default function TopbarButton(props) {
    const type = props.type in navbarType ? navbarType[props.type] : {};
    return (
        <Navbar expand="lg" {...type} bg="light">
            <Container>
                <Logo src={props.logo} title={props.title} />
                <div className="d-flex flex-lg-row-reverse">
                    {props.theme ? <ThemeSwither theme="light" switch="dark" /> : null}
                    <Navigation navLink={props.navLink}>
                        <Button className="px-4" onClick={props.click}><strong>{props.button}</strong></Button>
                    </Navigation>
                </div>
            </Container>
        </Navbar>
    );
}