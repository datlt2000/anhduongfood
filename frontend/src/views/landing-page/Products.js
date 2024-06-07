import React, { useState, useLayoutEffect } from "react";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import { Container } from "react-bootstrap";
import banner_2 from 'images/food/banner-2.jpg';
import TextOnImage from "components/layouts/TextOnImage"
import CardListLayout from "components/gallery/CardListLayout";
import ProductService from "services/landing-page/ProductService";

export default function Products() {
    const [products, setProducts] = useState([])
    useLayoutEffect(() => {
        ProductService.getProducts().then(res => {
            setProducts(res)
        })
    }, []);
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
                </Container>
            </AnimationRevealPage>
        </>
    );
}