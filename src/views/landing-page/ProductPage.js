import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import { productList, dress
}
    from 'const/DressPageDemo';
import CardListLayout from "components/menu/CardListLayout";
import SimpleProductDetail from "components/product/SimpleProductDetail";
import { useParams } from "react-router-dom";

export default function ProductPage(props) {
    const {productId} = useParams();
    const [product, setProduct] = useState(productList[0]);

    useEffect(() => {
        const id = parseInt(productId) - 1;
        if (id > 0 || id < productList.length){
            setProduct(productList[id])
        }
    }, [productId]);

    return (
        <>
            <AnimationRevealPage disabled>
                <Container className="py-5 mt-3">
                    <SimpleProductDetail {...product} reverse />
                </Container>
                <Container className="text-dark pb-5">
                    <CardListLayout title="Các sản phẩm khác" listItem={dress} />
                </Container>
            </AnimationRevealPage>
        </>
    );
}