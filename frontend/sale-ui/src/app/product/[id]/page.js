import React from "react";
import { Container } from "react-bootstrap";
import CardListLayout from "@/components/gallery/CardListLayout";
import SimpleProductDetail from "@/components/product/SimpleProductDetail";
import parser from "html-react-parser";
import he from "he";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const revalidate = 10
export async function getProduct(id) {
    const res = await fetch(baseUrl + "product/" + id);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const product = await res.json();
    return { ...product, images: product.images.map(image => image.url) }
}

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
export default async function ProductPage({ params }) {
    const id = params.id;
    const product = await getProduct(id);
    const descriptionHtml = he.decode(product.descriptionHtml ?? "");
    const products = await getProducts();
    return (
        <>
            <Container className="py-5 mt-3">
                {product ?
                    <SimpleProductDetail {...product} description={parser(descriptionHtml)} />
                    : <div>No data</div>}
            </Container>
            <Container className="text-dark pb-5">
                <CardListLayout title="Các sản phẩm khác" >
                    {products?.map((item, index) => {
                        return <CardListLayout.Item key={index} item={item} />
                    })}
                </CardListLayout>
            </Container>
        </>
    );
}
