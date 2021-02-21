import React from 'react';

/* Styles */
import './Button.scss';

export const Button = (props) => {
    return (
        <button className="button"
            onClick={props.onClick}
            type={props.type}>
            {props.children}
        </button>
    );
};

Button.defaultProps = {
    onClick: () => { },
    type: 'button'
};
