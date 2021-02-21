import React from 'react';

/* Components */
import { P } from './../p/P';

/* Functions */
import { datediff } from '../../functions/datediff';

/* Styles */
import './CheemsifyCard.scss';

export const CheemsifyCard = (props) => {
    return (
        <div className="cheemsify-card" style={props.style}>
            <div className="card-body">
                <small className="card-date">{datediff(new Date(props.card.creationDate))}</small>
                <P className="cheemsified-text">
                    {props.card.cheemsifiedText}
                </P>
            </div>
        </div>
    );
};
