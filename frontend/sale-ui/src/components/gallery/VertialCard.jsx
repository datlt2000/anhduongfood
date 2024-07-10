'use client'
import { Card } from "react-bootstrap";
import TextTruncate from "react-text-truncate";

export default function VertialCard({ item }) {
    // console.log(item.subtitle)
    return (
        <a href={item.url} style={{ textDecoration: 'none' }}>
            <Card bg='light' border="light" className="card-shadow text-dark-custom">
                <div className="hover-zoom">
                    <Card.Img variant="top" style={{ height: "300px", objectFit: "cover", objectPosition: "center" }} src={item.image} />
                </div>
                <Card.Body>
                    <div>
                        {item.title ?
                            <Card.Title style={{ minHeight: "50px" }}>
                                <TextTruncate line={2} text={item.title} />
                            </Card.Title> : null}
                        {item.subtitle ?
                            <Card.Subtitle style={{ minHeight: "50px" }}>
                                <TextTruncate line={2} text={item.subtitle} />
                            </Card.Subtitle> : null}
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