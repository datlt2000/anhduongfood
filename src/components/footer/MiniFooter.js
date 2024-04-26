import { faFacebook, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Image, Stack } from "react-bootstrap";

const logoStyle = {
    width: '50px',
    marginRight: '5px'
}
export default function MiniFooter(props) {
    return (
        <Container>
            <Stack direction='vertical' gap={4}>
                <div className="mx-auto d-flex">
                    <Image style={logoStyle} src={props.image} />
                    <span className="heading-title ms-3">{props.title}</span>
                </div>
                <Stack direction='vertical' className="mx-auto" gap={3}>
                    <div className="mx-auto text-center">{props.address}</div>
                    <div className="mx-auto">{props.phone}</div>
                    <div className="mx-auto">{props.email}</div>
                </Stack>
                <Stack direction="horizontal" gap={4} className="mx-auto">
                    {props.facebook ? <a href={props.facebook}><FontAwesomeIcon icon={faFacebook} /></a> : null}
                    {props.twitter ? <a href={props.twitter}><FontAwesomeIcon icon={faTwitter} /></a> : null}
                    {props.youtube ? <a href={props.youtube}><FontAwesomeIcon icon={faYoutube} /></a> : null}
                    {props.tiktok ? <a href={props.tiktok}><FontAwesomeIcon icon={faTiktok} /></a> : null}
                </Stack>
                <div className="mx-auto opacity-75" style={{ fontSize: '1rem' }}>
                    {props.copyright}
                </div>
            </Stack>
        </Container>
    );
}