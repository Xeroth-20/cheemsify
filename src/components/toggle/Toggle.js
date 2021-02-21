import React from 'react';

/* Styles */
import './Toggle.scss';

export const Toggle = (props) => {
    const containerCN = props.children.trim() ? 'toggle-container' : 'no-toggle-container';
    const toggleBtnCN = props.value ? 'toggle-btn active' : 'toggle-btn';
    const toggleTitle = props.value ? props.title.active : props.title.notactive;
    
    return (
        <div className="toggle">
            <input id={props.id}
                onChange={props.handleChange}
                type="checkbox"
                value={props.value}
                tabIndex="-1" />
            <div className={containerCN} style={props.style}>
                <div className="toggle-col">
                    <span className="toggle-name">
                        {props.children}
                    </span>
                </div>
                <div className="toggle-col">
                    <label className={toggleBtnCN} htmlFor={props.id} title={toggleTitle}>
                    </label>
                </div>
            </div>
        </div>
    );
};

Toggle.defaultProps = {
    children: '',
    title: {}
};
