import React, { useLayoutEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import blogBg from "images/blog-bg.jpg";
import { useParams } from "react-router-dom";
import TextOnImage from "components/layouts/TextOnImage";
import { serializer } from "components/editor/SlateEditor/utils/serializer";
import parser from "html-react-parser";
import PostService from "services/landing-page/PostService";

export default function Post(props) {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [contentHtml, setContentHtml] = useState(null)
    const image = post?.images?.length > 0 ? (post.images[0]?.url ?? blogBg) : blogBg
    useLayoutEffect(() => {
        PostService.getPost(postId).then(res => {
            if (res.status === 200) {
                setPost(res.data)
                let html = serializer(JSON.parse(res.data.content))
                setContentHtml(html)
            }
        })
    }, [postId]);

    return (
        <>
            <AnimationRevealPage disabled>
                <div>
                    {post ?
                        <TextOnImage image={image} paddingTop="150px" paddingBottom="150px" >
                            <TextOnImage.Caption heading={post?.title} postSign={post?.createdAt} direction="left" position="center"></TextOnImage.Caption>
                        </TextOnImage> :
                        <div>No data</div>
                    }
                </div>
                <Container className="text-dark py-5">
                    <Row>
                        <Col lg={8} md={10} className='mx-auto'>
                            {parser(contentHtml ?? "")}
                        </Col>
                    </Row>
                </Container>
            </AnimationRevealPage>
        </>
    );
}