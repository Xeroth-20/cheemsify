import React from 'react';

/* Components */
import { CheemsifyCard } from './../cheemsify-card/CheemsifyCard';

/* Styles */
import './CheemsifyCardList.scss';

export const CheemsifyCardList = (props) => {
    const cheemsifyCardList = props.cardList.map((card) => {
        return (
            <CheemsifyCard key={card._id} card={card} />
        );
    });

    return (
        <div className="cheemsify-card-list">
            {cheemsifyCardList}
        </div>
    );
};
