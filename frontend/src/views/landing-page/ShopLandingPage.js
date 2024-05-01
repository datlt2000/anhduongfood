import React from "react";
import AnimationRevealPage from "components/helpers/AnimationRevealPage";
import { Container } from "react-bootstrap";
import FeatureThreeColumnLayout from "components/layouts/FeatureColumnLayout";
import {
    reviews, featuresPage, slides, dress, news,
    collection1, collection2
}
    from 'const/DressPageDemo';
import TwoColumnWithImageLayout from "components/layouts/TwoColumnWithImageLayout";
import { advantage } from "const/demodata";
import ReviewThreeColumnLayout from "components/users/ReviewThreeColumnLayout";
import SimpleSlide from "components/slide/SimpleSlider";
import CardListLayout from "components/menu/CardListLayout";

export default function ShopLandingPage() {
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
                    <CardListLayout title="Sản phẩm nổi bật" listItem={dress} />
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
                    <CardListLayout title="Tin tức & Sự kiện" listItem={news} />
                </Container>
                <Container fluid className="py-5">
                    <ReviewThreeColumnLayout reviews={reviews} title="Khách hàng nói gì?" description='Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                </Container>
            </AnimationRevealPage>
        </>
    );
}