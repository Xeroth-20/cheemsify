import React from 'react';

/* Components */
import { Button } from './../Button/Button';
import { P } from './../p/P';

/* Styles */
import './PopUp.scss';

export const PopUp = (props) => {

    const closePopUp = ({ target }) => {
        const container = document.querySelector('.pop-up');
        if (container == target) {
            props.handlePopUpClose();
        }
    };

    return (
        <div className="pop-up" style={{ display: props.display ? 'flex' : 'none' }}
            onClick={closePopUp}>
            <div className="pop-up-card">
                <h1 className="title">
                    {props.title}
                </h1>
                <P className="message">
                    {props.message}
                </P>
                <Button onClick={props.handlePopUpClose}>
                    VALE
                </Button>
            </div>
        </div>
    );
};
