import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <footer>
                <p>&copy; 2021 webfolio</p>
            </footer>
        </div>
    );
}

export default Layout;
