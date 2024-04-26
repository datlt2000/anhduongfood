import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
// Containers
const AdminLayout = React.lazy(() => import('layout/admin/AdminLayout'))
const LandingPageLayout = React.lazy(() => import('layout/landingpage/LandingPageLayout'))

// Pages
const Login = React.lazy(() => import('views/pages/login/Login'))
const Register = React.lazy(() => import('views/pages/register/Register'))
const ForgotPass = React.lazy(() => import('views/pages/forgotpass/ForgotPass'))
const Page404 = React.lazy(() => import('views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('views/pages/page500/Page500'))
const router = createBrowserRouter([
    {
        path: "/login",
        name: "Login Page",
        element: <Login />
    },
    {
        path: "/register",
        name: "Register Page",
        element: <Register />
    },
    {
        path: "/forgotpass",
        name: "Forgot Password Page",
        element: <ForgotPass />
    },
    {
        path: "/404",
        name: "Page 404",
        element: <Page404 />
    },
    {
        path: "/500",
        name: "Page 500",
        element: <Page500 />
    },
    {
        path: "/admin/*",
        name: "Admin Pages",
        element: <AdminLayout />
    },
    {
        path: "/*",
        name: "Landing Pages",
        element: <LandingPageLayout />
    }

], { basename: process.env.REACT_APP_BASE_URL });
export default router;