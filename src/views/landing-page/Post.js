import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import {
    news
}
    from 'const/DressPageDemo';
import blogBg from "images/blog-bg.jpg";
import { useParams } from "react-router-dom";
import TextOnImage from "components/layouts/TextOnImage";

export default function Post(props) {
    const { postId } = useParams();
    const [post, setPost] = useState(news[0]);

    useEffect(() => {
        const id = parseInt(postId) - 1;
        if (id > 0 || id < news.length) {
            setPost(news[id]);
        }
    }, [postId]);

    return (
        <>
            <AnimationRevealPage disabled>
                <div>
                    <TextOnImage image={blogBg} paddingTop="150px" paddingBottom="150px" >
                        <TextOnImage.Caption heading={post.title} postSign={post.createdAt} direction="left" position="center"></TextOnImage.Caption>
                    </TextOnImage>
                </div>
                <Container className="text-dark py-5">
                    <Row>
                        <Col lg={8} md={10} className='mx-auto'>
                            {post.content.map((text, idx) => {
                                return <p key={idx}>{text}</p>
                            })}
                        </Col>
                    </Row>
                </Container>
            </AnimationRevealPage>
        </>
    );
}