import React, { useState, useLayoutEffect } from "react";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import { Container, Row, Col } from "react-bootstrap";
import blogBg from 'images/blog-bg.jpg';
import TextOnImage from "components/layouts/TextOnImage"
import CardListLayout from "components/gallery/CardListLayout";
import ItemList from "components/gallery/ItemList";
import PostService from "services/landing-page/PostService";

export default function Blog() {
    const [posts, setPosts] = useState([])
    useLayoutEffect(() => {
        PostService.getPosts().then(res => {
            setPosts(res)
        })
    }, []);
    return (
        <>
            <AnimationRevealPage disabled>
                <div>
                    <TextOnImage image={blogBg} paddingTop="150px" paddingBottom="150px">
                        <TextOnImage.Caption heading="Tin Tức" direction="center" position="center"></TextOnImage.Caption>
                    </TextOnImage>
                </div>
                <Container className="py-5 px-0">
                    {posts ?
                        <Row>
                            <Col lg={9}>
                                <CardListLayout title="" number={4} >
                                    {posts?.map((item, index) => {
                                        return <CardListLayout.Item key={index} item={item} />
                                    })}
                                </CardListLayout>
                            </Col>
                            <Col lg={3}>
                                <ItemList title="Liên quan" >
                                    {posts?.map((item, idx) => {
                                        return (
                                            <ItemList.Item key={idx} item={item} />
                                        );
                                    })}
                                </ItemList>
                            </Col>
                        </Row> : <div>No data</div>}
                </Container>
            </AnimationRevealPage>
        </>
    );
}
