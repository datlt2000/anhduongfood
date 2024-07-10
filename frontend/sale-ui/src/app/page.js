import React from "react";
import { Container } from "react-bootstrap";
import FeatureThreeColumnLayout from "@/components/layouts/FeatureColumnLayout";
import {
    reviews, featuresPage, slides,
    collection1, collection2, advantage
}
    from '@/const/DressPageDemo';
import TwoColumnWithImageLayout from "@/components/layouts/TwoColumnWithImageLayout";
import ReviewThreeColumnLayout from "@/components/users/ReviewThreeColumnLayout";
import SimpleSlide from "@/components/slide/SimpleSlider";
import CardListLayout from "@/components/gallery/CardListLayout";
export const revalidate = 10
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export async function getProducts() {
    const res = await fetch(baseUrl + "product",
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderBy: 'id', order: 'asc', start: 0, limit: 8 })
        })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const productsList = (await res.json()).data
    const products = productsList.map((product) => {
        return {
            ...product,
            description: product.price,
            image: product.images.length > 0 ? product.images[0].url : null,
            url: process.env.NEXT_PUBLIC_BASE_URL + "product/" + product.id
        }
    })
    return products
}

export async function getPosts() {
    const postRes = await fetch(baseUrl + "post",
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderBy: 'id', order: 'asc', start: 0, limit: 8 })
        })
    if (!postRes.ok) {
        throw new Error('Failed to fetch data')
    }
    const postList = (await postRes.json()).data
    const posts = postList.map(post => {
        return {
            ...post,
            url: process.env.NEXT_PUBLIC_BASE_URL + "post/" + post.id,
            image: post.images.length > 0 ? post.images[0].url : null,
            description: post.createdAt
        }
    })
    return posts;
}
export default async function ShopLandingPage() {
    const products = await getProducts();
    const posts = await getPosts();
    return (
        <>
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
        </>
    );
}