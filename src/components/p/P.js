import React from 'react';

/* Styles */
import './P.scss';

export const P = (props) => {
    const className = 'p' + ' ' + props.className; 

    return (
        <p className={className.trim()} style={props.style}>
            {props.children}
        </p>
    );
};

P.defaultProps = {
    className: ''
};
