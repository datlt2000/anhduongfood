import React, { useLayoutEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import CardListLayout from "components/gallery/CardListLayout";
import SimpleProductDetail from "components/product/SimpleProductDetail";
import { useParams } from "react-router-dom";
import { serializer } from "components/editor/SlateEditor/utils/serializer";
import parser from "html-react-parser";
import ProductService from "services/landing-page/ProductService";

export default function ProductPage(props) {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [descriptionHtml, setDescriptionHtml] = useState(null)
    const [products, setProducts] = useState([])

    useLayoutEffect(() => {
        ProductService.getProduct(productId).then(res => {
            setProduct(res)
            let html = serializer(JSON.parse(res.description))
            setDescriptionHtml(html)
        })
        ProductService.getProducts().then(res => {
            setProducts(res)
        })
    }, [productId]);

    return (
        <>
            <AnimationRevealPage disabled>
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
            </AnimationRevealPage>
        </>
    );
}