import { Outlet, Link, useLocation } from "react-router-dom";
import React from "react";
import "../styles/index.css";

const Layout = () => {

    const { pathname } = useLocation();

    React.useEffect(() => {
        console.log("CurrentPathname : ", pathname);
    }, [pathname]);

    return (
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid d-flex align-items-center">
                    <a class="navbar-brand" href="#">Websphere</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='nav-heading d-flex ms-auto'>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="#" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>Domains</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="#" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>Hosting</Link>
                                </li>
                                <button class="btn btn-black" type="submit">Sign in</button>
                            </ul>

                        </div>
                    </div>
                </div>

            </nav>

            <Outlet />

        </>
    )
};

export default Layout;