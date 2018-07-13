import React from 'react';

const Button = (props) => {
    return (
        <a className="button" href={props.link}>{props.value}</a>
    );
};

export default Button;