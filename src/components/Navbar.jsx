import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';


const Navbar = () => {
    const data = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

    const {title} = data.site.siteMetadata
    return (
        <nav>
            <h1>{title}</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/projects">portfolio</Link>
            </div>
        </nav>
    );
}

export default Navbar;