import React from 'react';

/* Styles */
import './Credits.scss';

export const Credits = () => {
    return (
        <footer className="credits">
            <div className="made-by">Creado por Jhonatan Castillo</div>
            <div className="link-list">
                <a className="link" href="https://www.facebook.com/FriedAvocado/" target="_blank" >
                    <img className="icon" src="/assets/facebook.svg" alt="Facebook icon" />
                </a>
                <a className="link" href="https://github.com/Xeroth-20" target="_blank" >
                    <img className="icon" src="/assets/github.svg" alt="Github icon" />
                </a>
            </div>
        </footer>
    );
};
