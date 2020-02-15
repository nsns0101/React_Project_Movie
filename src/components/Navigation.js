import React from "react";
import { Link } from "react-router-dom";    //Link : 새로고침없이 페이지이동
function Navigation() {
    return <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}

export default Navigation;