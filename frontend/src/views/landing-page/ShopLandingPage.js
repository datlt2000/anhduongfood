import React, { useState, useLayoutEffect } from "react";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import { Container } from "react-bootstrap";
import FeatureThreeColumnLayout from "components/layouts/FeatureColumnLayout";
import {
    reviews, featuresPage, slides,
    collection1, collection2
}
    from 'const/DressPageDemo';
import TwoColumnWithImageLayout from "components/layouts/TwoColumnWithImageLayout";
import { advantage } from "const/demodata";
import ReviewThreeColumnLayout from "components/users/ReviewThreeColumnLayout";
import SimpleSlide from "components/slide/SimpleSlider";
import CardListLayout from "components/gallery/CardListLayout";
import ProductService from "services/landing-page/ProductService"
import PostService from "services/landing-page/PostService";

export default function ShopLandingPage() {
    const [products, setProducts] = useState([])
    const [posts, setPosts] = useState(null)
    useLayoutEffect(() => {
        ProductService.getProducts({ orderBy: 'id', order: 'asc', start: 0, limit: 8 }).then(res => {
            setProducts(res.data)
        })
        PostService.getPosts({ orderBy: 'id', order: 'asc', start: 0, limit: 8 }).then(res => {
            setPosts(res.data)
        })
    }, []);
    return (
        <>
            <AnimationRevealPage disabled>
                <div>
                    <SimpleSlide slides={slides} />
                </div>
                <Container className="py-5">
                    <TwoColumnWithImageLayout  {...advantage} reverse >
                    </TwoColumnWithImageLayout>
                </Container>
                <Container className="py-5">
                    {products ?
                        <CardListLayout title="Sản phẩm nổi bật">
                            {products?.map((item, index) => {
                                return <CardListLayout.Item key={index} item={item} />
                            })}
                        </CardListLayout> : <div></div>}
                </Container>
                <div>
                    <picture>
                        <source media='(min-width: 720px)' srcSet={collection1} style={{ width: '100%', height: '100%' }} />
                        <img src={collection2} alt='summer collection' style={{ width: '100%', height: '100%' }} />
                    </picture>
                </div>
                <div className="py-5">
                    <Container fluid className="my-5">
                        <FeatureThreeColumnLayout {...featuresPage} col={4} />
                    </Container>
                </div>
                <Container className="py-5">
                    {posts ?
                        <CardListLayout title="Tin tức & Sự kiện">
                            {posts?.map((item, index) => {
                                return <CardListLayout.Item key={index} item={item} />
                            })}
                        </CardListLayout> : <div></div>}
                </Container>
                <Container fluid className="py-5">
                    <ReviewThreeColumnLayout reviews={reviews} title="Khách hàng nói gì?" description='Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                </Container>
            </AnimationRevealPage>
        </>
    );
}