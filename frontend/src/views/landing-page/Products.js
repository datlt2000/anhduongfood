import React, { useState, useLayoutEffect } from "react";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import { Container, Stack } from "react-bootstrap";
import banner_2 from 'images/food/banner-2.jpg';
import TextOnImage from "components/layouts/TextOnImage"
import CardListLayout from "components/gallery/CardListLayout";
import ProductService from "services/landing-page/ProductService";
import CustomPagination from "components/pagination/CustomPagination";

export default function Products() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const pageNum = Math.ceil(total / 8);
    const handleChangePage = (event, newPage) => {
        if (newPage >= 0 && newPage < pageNum)
            setPage(newPage);
    };
    useLayoutEffect(() => {
        ProductService.getProducts({ orderBy: 'id', order: 'asc', start: page * 8, limit: 8 }).then(res => {
            setProducts(res.data)
            setTotal(res.total)
        })
    }, [page]);
    return (
        <>
            <AnimationRevealPage disabled>
                <div>
                    <TextOnImage image={banner_2} paddingTop="150px" paddingBottom="150px">
                        <TextOnImage.Caption heading="Sản phẩm" subheading="" direction="center" position="center"></TextOnImage.Caption>
                    </TextOnImage>
                </div>
                <Container className="pb-5">
                    <CardListLayout title="" >
                        {products?.map((item, index) => {
                            return <CardListLayout.Item key={index} item={item} />
                        })}
                    </CardListLayout>
                    <Stack>
                        <CustomPagination className="ms-auto me-auto" size="sm" pageNumber={pageNum} page={page} handleChangePage={handleChangePage} />
                    </Stack>
                </Container>
            </AnimationRevealPage>
        </>
    );
}