import { Card } from "react-bootstrap";
import TextTruncate from "react-text-truncate";

export default function VertialCard({ item }) {
    return (
        <a href={item.url} style={{ textDecoration: 'none' }}>
            <Card bg='light' border="light" className="card-shadow text-dark-custom">
                <div className="hover-zoom">
                    <Card.Img variant="top" src={item.image} />
                </div>
                <Card.Body>
                    <Card.Title>
                        <TextTruncate line={2} text={item.title} />
                    </Card.Title>
                    <Card.Subtitle>
                        <TextTruncate line={2} text={item.subtitle} />
                    </Card.Subtitle>
                    <Card.Text style={{ fontWeight: 400, fontSize: "1rem" }} className="opacity-75 text-trancate">
                        <TextTruncate line={3} text={item.description} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
}