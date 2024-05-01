import { Card } from "react-bootstrap";
import TextTruncate from "react-text-truncate";

export default function HorizontalCard({ item }) {
    return (
        <a href={item.url} style={{ textDecoration: 'none' }}>
            <Card className="text-dark-custom flex-row border-0 bg-light-blue">
                <Card.Img style={{ height: '100px', width: '150px' }} src={item.image}></Card.Img>
                <Card.Body>
                    <Card.Title>
                        <TextTruncate line={2} text={item.title} />
                    </Card.Title>
                    <Card.Subtitle>
                        <TextTruncate line={2} text={item.subtitle} />
                    </Card.Subtitle>
                    <Card.Text style={{ fontWeight: 400, fontSize: "0.85rem" }} className="opacity-75">
                        <TextTruncate line={3} text={item.description} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
}