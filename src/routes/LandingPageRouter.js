import React from 'react';
const SimpleContact = React.lazy(() => import('views/pages/contact/SimpleContact'));
const ShopLandingPage = React.lazy(() => import('views/landing-page/ShopLandingPage'));
const ProductPage = React.lazy(() => import('views/landing-page/ProductPage'));
const About = React.lazy(() => import('views/pages/about/FullWidthPic'));
const ProductList = React.lazy(() => import('views/landing-page/ProductList'));
const Blog = React.lazy(() => import('views/landing-page/Blog'));
const Post = React.lazy(() => import('views/landing-page/Post'));

const landingPageRoute = [
    {
        path: "/product",
        name: "Product Page",
        element: <ProductList />,
    },
    {
        path: "/product/:productId",
        name: "Product Page",
        element: <ProductPage />,
    },
    {
        path: "/",
        name: "Main Shop Page",
        element: <ShopLandingPage />,
    },
    {
        path: "/about",
        name: "About Company",
        element: <About />,
    },
    {
        path: "/blog",
        name: "blog",
        element: <Blog />,
    },
    {
        path: "/blog/:postId",
        name: "Post Page",
        element: <Post />,
    },
    {
        path: "/hiring",
        name: "Job describtion",
        element: <ProductList />,
    },
    {
        path: "/contacts",
        name: "Contact informations",
        element: <SimpleContact />,
    },
]

export default landingPageRoute