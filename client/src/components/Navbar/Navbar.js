import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand" to="/">
        <strong>Helping Hands</strong>
        </Link>

        {/* IS THIS DIV NEEDED ?? */}
        <div>   

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-header navbar-collapse" id="navNavbar">

            <ul className="navbar-nav">
                <li
                className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/home"
                    ? "nav-item active"
                    : "nav-item"
                }
                >
                <Link to="/home" className="nav-link">
                    Home
                </Link>
                </li>

                <li
                className={
                    window.location.pathname === "/opportunity"
                    ? "nav-item active"
                    : "nav-item"
                }
                >
                <Link to="/opportunity" className="nav-link">
                    Opportunity
                </Link>
                </li>

                {/* <li 
                className={
                    window.location.pathname === "/opportunity/learn"
                    ? "nav-item active"
                    : "nav-item"
                }
                >
                <Link to="/opportunities/learn" className="nav-link">
                    Learn
                </Link>
                </li> */}

                <li
                className={
                    window.location.pathname === "/signup"
                    ? "nav-item active"
                    : "nav-item"
                }
                >
                <Link to="/signup" className="nav-link">
                    Sign Up
                </Link>
                </li>

                {/* <li 
                className={
                    window.location.pathname === "/"
                    ? "nav-item active"
                    : "nav-item"
                }
                >
                <Link to="/" className="nav-link disabled">
                    Disabled
                </Link>
                </li> */}
            </ul>
        </div>
        </div>
    </nav>
);

export default Navbar;
