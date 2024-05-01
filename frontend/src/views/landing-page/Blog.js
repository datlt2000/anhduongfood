import React from "react";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import { Container, Row, Col } from "react-bootstrap";
import {
    news
}
    from 'const/DressPageDemo';
import blogBg from 'images/blog-bg.jpg';
import TextOnImage from "components/layouts/TextOnImage"
import CardListLayout from "components/menu/CardListLayout";
import ItemList from "components/menu/ItemList";

export default function Blog() {
    return (
        <>
            <AnimationRevealPage disabled>
                <div>
                    <TextOnImage image={blogBg} paddingTop="150px" paddingBottom="150px">
                        <TextOnImage.Caption heading="Tin Tức" direction="center" position="center"></TextOnImage.Caption>
                    </TextOnImage>
                </div>
                <Container className="py-5">
                    <Row>
                        <Col lg={9}>
                            <CardListLayout title="" listItem={news} number={4} />
                        </Col>
                        <Col lg={3}>
                            <ItemList title="Liên quan" listItem={news.map((item, idx) => {
                                return { url: item.url, title: item.title, image: item.image, description: item.createdAt }
                            })} />
                        </Col>
                    </Row>
                </Container>
            </AnimationRevealPage>
        </>
    );
}
