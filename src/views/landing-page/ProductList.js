import React from "react";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import { Container } from "react-bootstrap";
import {
    dress
}
    from 'const/DressPageDemo';
import banner_2 from 'images/food/banner-2.jpg';
import TextOnImage from "components/layouts/TextOnImage"
import CardListLayout from "components/menu/CardListLayout";

export default function ProductList() {
    return (
        <>
            <AnimationRevealPage disabled>
                <div>
                    <TextOnImage image={banner_2} paddingTop="150px" paddingBottom="150px">
                        <TextOnImage.Caption heading="Sản phẩm" subheading="" direction="center" position="center"></TextOnImage.Caption>
                    </TextOnImage>
                </div>
                <Container className="pb-5">
                    <CardListLayout title="" listItem={dress} />
                </Container>
            </AnimationRevealPage>
        </>
    );
}