import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../sass/notfound.scss';

const NotFound = () => {
    return (
        <div className="notfoundpage">
            <Navigation></Navigation>
            <Header title="404" buttonValue="Back to Home" buttonLink="/" description="Oops! Page Not Found"></Header>
        </div>
    );
};

export default NotFound;