import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextOnImage from '@/components/layouts/TextOnImage';
import { about } from '@/const/DressPageDemo';
import { Container, Col } from "react-bootstrap";
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function About(props) {
    return (
        <div>
            <div>
                <TextOnImage image={about.masthead.image} padding={150} height="500px">
                    <TextOnImage.Caption {...about["masthead"]} direction="center" position="center"></TextOnImage.Caption>
                </TextOnImage>
            </div>
            <Container>
                <Col lg={8} md={10} className='mx-auto py-5'>
                    {about.session.map((item, index) => {
                        return <div key={index}>
                            <h3><FontAwesomeIcon className='text-primary me-3' icon={faCircleRight} />{item.title}</h3>
                            <hr />
                            {item.text.map((t, idx) => {
                                return <p key={idx}>{t}</p>
                            })}
                            <br />
                        </div>
                    })}
                    <video height={240} width={320} controls style={{ width: '100%', height: 'auto' }}>
                        <source src={about.video}></source>
                    </video>
                </Col>
            </Container>
        </div>
    );
}