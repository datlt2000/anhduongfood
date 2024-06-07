import React from 'react';
const SimpleContact = React.lazy(() => import('views/pages/contact/SimpleContact'));
const ShopLandingPage = React.lazy(() => import('views/landing-page/ShopLandingPage'));
const ProductPage = React.lazy(() => import('views/landing-page/Product'));
const About = React.lazy(() => import('views/pages/about/FullWidthPic'));
const Products = React.lazy(() => import('views/landing-page/Products'));
const Blog = React.lazy(() => import('views/landing-page/Blog'));
const Post = React.lazy(() => import('views/landing-page/Post'));
const Page404 = React.lazy(() => import('views/pages/page404/Page404'))

const landingPageRoute = [
    {
        path: "/product",
        name: "Product Page",
        element: <Products />,
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
        path: "/post",
        name: "Blog Page",
        element: <Blog />,
    },
    {
        path: "/post/:postId",
        name: "Post Page",
        element: <Post />,
    },
    {
        path: "/hiring",
        name: "Job describtion",
        element: <Products />,
    },
    {
        path: "/contacts",
        name: "Contact informations",
        element: <SimpleContact />,
    },
    {
        path: "/*",
        name: "Page 404",
        element: <Page404 />
    },
]

export default landingPageRoute