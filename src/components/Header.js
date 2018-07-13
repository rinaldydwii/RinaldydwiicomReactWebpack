import React from 'react';
import Button from './Button';
import '../sass/header.scss';

const Header = (props) => {
    let description = "";
    if (props.description != undefined) description = (<div>{props.description}</div>);
    
    return (
        <header id="header">
            <div className="header__title">
                <h1>{props.title}</h1>
                {description}
            </div>
            <Button link={props.buttonLink} value={props.buttonValue}></Button>
        </header>
    );
};

export default Header;