import { Navbar, Container, Nav, Offcanvas, Image } from "react-bootstrap";
import { BiLogIn, BiHomeAlt, BiLogOut, BiTv } from 'react-icons/bi'
import AuthRequests from "../../../requests/auth";
import { clearStorage } from "../../../config/storage";
import React from "react";
import { menuLogged, menuUnlogged } from "../../../config/app.structure";


const MyNavbar = (props: any): JSX.Element => {
    const expand = "lg";
    const { navigate, _setLogged, logged, location, loading } = props;

    const logout = async () => {
        const authRequest = new AuthRequests();
        const res = await authRequest.logout();
        if (res?.status !== 200) {
            console.log(res);
            return;
        }
        _setLogged(false);
        clearStorage();
        navigate('/');
    }

    const getLoaderClass = () => document.querySelector("div.loader-container")?.classList.contains('fullScreen');

    if (loading === true) {
        if (getLoaderClass()) {
            return <></>;
        }
    }

    const MenuItem = (item: any) => <span className="nav-link" title="home" onClick={() => navigate(item.link)}>
        {/* <BiHomeAlt size={35} /> */}
        {item.flag}
    </span>

    return <Navbar key={expand} expand={expand} className="shadow my-navbar" fixed="top">
        <Container>
            <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <Image src={require('../../../assets/img/logo_name.png')} className="universal-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`navoffcanvas`} />
            <Navbar.Offcanvas id={`navoffcanvas`} aria-labelledby={`offcanvas-title`} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvas-title`}>
                        Offcanvas
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        {location.pathname !== '/forgot-password' && <>
                            {logged && menuLogged.map((item: any, index: any) => <MenuItem key={index} { ...item } />) }
                            {!logged && menuUnlogged.map((item: any, index: any) => <MenuItem key={index} { ...item } />) }
                            {logged && <span className="nav-link" title="logout" onClick={logout}>Logout</span>}
                        </>}
                        {location.pathname === '/forgot-password' && <>
                            <h1 className="fs-4">Reset Password</h1>
                        </>}
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
}

export default MyNavbar;