import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import TextOnImage from "@/components/layouts/TextOnImage";
import parser from "html-react-parser";
import he from "he";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
export const revalidate = 10
export async function getPost(id) {
    return await fetch(baseUrl + "post/" + id).then(res => {
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json();
    })
}

export default async function Post({ params }) {
    const id = params.id;
    const post = await getPost(id);
    const contentHtml = he.decode(post.contentHtml ?? "");
    const image = post?.images?.length > 0 ? (post.images[0]?.url ?? "/images/blog-bg.jpg") : "/images/blog-bg.jpg";
    return (
        <>
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
        </>
    );
}
