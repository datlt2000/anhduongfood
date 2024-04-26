import { Container, Image, Navbar } from "react-bootstrap";
import ThemeSwither from "components/bases/ThemeSwitcher";
import { navbarType } from "components/bases/TopbarComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell } from "@fortawesome/free-regular-svg-icons";

export default function TopbarAvatar(props) {
    const type = props.type in navbarType ? navbarType[props.type] : {};
    return (
        <Navbar expand="lg" {...type} className={props.className}>
            <Container fluid className="mx-4">
                <div></div>
                <div className="d-flex flex-lg-row-reverse">
                    {props.theme ? <ThemeSwither theme="light" switch="dark" /> : null}
                    <div>
                        <button className="btn btn-icon me-3 btn-transparent-dark" onClick={props.notiFunction}>
                            <FontAwesomeIcon size="sm" icon={faBell} />
                        </button>
                        <button className="btn btn-icon me-3 btn-transparent-dark" onClick={props.messageFunction}>
                            <FontAwesomeIcon size="sm" icon={faEnvelope}/>
                        </button>
                        <Image src={props.avatar} roundedCircle style={{ height: '40px' }} />
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}