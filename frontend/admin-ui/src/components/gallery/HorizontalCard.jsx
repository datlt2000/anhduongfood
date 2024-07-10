import { Card } from "react-bootstrap";
import TextTruncate from "react-text-truncate";

export default function HorizontalCard({ item }) {
    return (
        <a href={item.url} style={{ textDecoration: 'none' }}>
            <Card className="text-dark-custom flex-row border-0 bg-light-blue">
                <Card.Img style={{ height: '100px', width: '150px' }} src={item.image}></Card.Img>
                <Card.Body className="py-2">
                    <div>
                        {item.title ?
                            <Card.Title>
                                <TextTruncate style={{ minHeight: "50px" }} line={2} text={item.title} />
                            </Card.Title> : null}
                        {item.subtitle ?
                            <Card.Subtitle>
                                <TextTruncate style={{ minHeight: "50px" }} line={2} text={item.subtitle} />
                            </Card.Subtitle> : null
                        }
                        {item.description ?
                            <Card.Text style={{ fontWeight: 400, fontSize: "0.85rem" }} className="opacity-75">
                                <TextTruncate element="span" line={3} text={item.description} />
                            </Card.Text> : null}
                    </div>
                </Card.Body>
            </Card>
        </a>
    );
}