import React from 'react';
import { NavLink, Button, Nav, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap";

export const navbarType = { "sticky": { sticky: "top" }, "fixed": { fixed: "top" }, "relative": {} }

export function Logo(props) {
    return (
        <NavbarBrand href="#home" className="fs-4">
            <img
                alt=""
                src={props.src}
                height="40"
                className="d-inline-block align-top"
            />{' '}
            {props.title ? <strong style={{ lineHeight: "40px", color: "#243E63" }}>{props.title}</strong> : null}
        </NavbarBrand>
    );
}

export function Navigation(props) {
    return (
        <>
            <NavbarToggle aria-controls="basic-navbar-nav" />
            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-center">
                    {props.navLink.map((item, index) => {
                        return <NavLink key={index} href={item.url} className="mx-3 fs-5"><strong>{item.title}</strong></NavLink>
                    })}
                    {props.children}
                </Nav>
            </NavbarCollapse>
        </>
    );
}

export function LoginButton(props) {
    return (
        <div className="d-inline-flex ms-lg-5 flex-column flex-lg-row align-items-center">
            <NavLink style={{ color: "#282c34" }} className="me-lg-3 text-center mb-3 mb-lg-0 fs-5"><strong>Login</strong></NavLink>
            <Button className="px-4 fs-5" style={{ borderRadius: "9999px" }}><strong>Sign up</strong></Button>
        </div>
    );
}