import React from 'react';
import { Link } from 'react-router-dom';


const Layout = ({children}) => {
    return (
        <div className="container">
            <Link to="/">
                <header className={h1}>
                    webpack-for-react
                </header>
            </Link>
            {children}
            <hr />
            <p className={pullRight}>
                Made with love by Me
            </p>
        </div>
    );
};

export default Layout;