import React from "react";
import DashBoard from "views/admin/Dashboard";
const Posts = React.lazy(() => import('views/admin/Posts'));
const Post = React.lazy(() => import('views/admin/Post'));
const Products = React.lazy(() => import('views/admin/Products'));

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
        element: <Post />
    },
    {
        path: '/product',
        exact: true,
        name: "Product Page",
        element: <Products />
    },
    {
        path:'/',
        name: "Dashboard",
        element: <DashBoard />
    }
]

export default adminRoute