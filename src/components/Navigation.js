import React from "react";
import { Link } from "react-router-dom";    //Link : 새로고침없이 페이지이동
import "./Navigation.css";
function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;
