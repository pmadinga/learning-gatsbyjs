import { Link } from 'gatsby';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <h1>WEBFOLIO</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/projects">portfolio</Link>

            </div>
        </div>
    );
}

export default Navbar;
