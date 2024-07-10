'use client'
import React, { useState, useLayoutEffect } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import TextOnImage from "@/components/layouts/TextOnImage"
import CardListLayout from "@/components/gallery/CardListLayout";
import ItemList from "@/components/gallery/ItemList";
import PostService from "@/services/landing-page/PostService";
import CustomPagination from "@/components/pagination/CustomPagination";

export default function Blog() {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const pageNum = Math.ceil(total / 8);
    const handleChangePage = (event, newPage) => {
        if (newPage >= 0 && newPage < pageNum)
            setPage(newPage);
    };
    useLayoutEffect(() => {
        PostService.getPosts({ orderBy: 'id', order: 'asc', start: page * 8, limit: 8 }).then(res => {
            setPosts(res.data)
            setTotal(res.total)
        })
    }, [page]);
    return (
        <>
            <div>
                <TextOnImage image={"/images/blog-bg.jpg"} paddingTop="150px" paddingBottom="150px">
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
                <Stack>
                    <CustomPagination className="ms-auto me-auto" size="sm" pageNumber={pageNum} page={page} handleChangePage={handleChangePage} />
                </Stack>
            </Container>
        </>
    );
}
