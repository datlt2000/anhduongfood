import React from "react";
import DashBoard from "src/views/admin/Dashboard";
const Posts = React.lazy(() => import('src/views/admin/post/Posts'));
const PostDetail = React.lazy(() => import('src/views/admin/post/PostDetail'));
const Products = React.lazy(() => import('src/views/admin/product/Products'));
const EditPost = React.lazy(() => import('src/views/admin/post/EditPost'));
const CreatePost = React.lazy(() => import('src/views/admin/post/CreatePost'));
const ProductDetail = React.lazy(() => import('src/views/admin/product/ProductDetail'));
const EditProduct = React.lazy(() => import('src/views/admin/product/EditProduct'));
const CreateProduct = React.lazy(() => import('src/views/admin/product/CreateProduct'));

const adminRoute = [
    {
        path: '/post',
        exact: true,
        name: "Posts Page",
        element: <Posts />
    },
    {
        path: '/post/:postId',
        exact: true,
        name: "Post Page",
        element: <PostDetail />
    },
    {
        path: '/post/:postId/edit',
        exact: true,
        name: "Edit Post Page",
        element: <EditPost />
    },
    {
        path: '/post/create',
        exact: true,
        name: "Create Post Page",
        element: <CreatePost />
    },
    {
        path: '/product',
        exact: true,
        name: "Products Page",
        element: <Products />
    },
    {
        path: '/product/:productId',
        exact: true,
        name: "Product Page",
        element: <ProductDetail />
    },
    {
        path: '/product/:productId/edit',
        exact: true,
        name: "Edit Product Page",
        element: <EditProduct />
    },
    {
        path: '/product/create',
        exact: true,
        name: "Create Product Page",
        element: <CreateProduct />
    },
    {
        path: '/',
        name: "Dashboard",
        element: <DashBoard />
    }
]

export default adminRoute