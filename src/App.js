import React from 'react';

/* Components */
import { CheemsifyForm } from './components/cheemsify-form/CheemsifyForm';
import { Showcase } from './components/showcase/Showcase';
import { Credits } from './components/credits/Credits';
import { PopUp } from './components/pop-up/PopUp';

/* Functions */
import { createCard } from './functions/apicalls';
import { cheemsify } from './functions/cheemsify';

/* Styles */
import './App.scss';

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            popUp: {
                title: '',
                message: '',
                display: false
            }
        };

        /* Binding */
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePopUpClose = this.handlePopUpClose.bind(this);
        this.showPopUp = this.showPopUp.bind(this);
    }

    handleSubmit(formState) {
        if (formState.valid) {
            createCard({
                text: formState.text,
                cheemsifiedText: cheemsify(formState.text)
            }).then((response) => {
                if (response.error) {
                    const { error } = response;
                    this.showPopUp(error.type, error.message);
                }
            });
        }
    }

    handlePopUpClose() {
        document.querySelector('body').style.overflow = 'scroll';
        this.setState((prevState) => {
            return {
                ...prevState,
                popUp: {
                    title: '',
                    message: '',
                    display: false
                }
            };
        });
    }

    showPopUp(title, message) {
        if (!this.state.popUp.display) {
            document.querySelector('body').style.overflow = 'hidden';
            this.setState((prevState) => {
                return {
                    ...prevState,
                    popUp: {
                        title,
                        message,
                        display: true
                    }
                };
            });
        }
    }

    render() {
        return (
            <div className="app">

                <PopUp display={this.state.popUp.display}
                    title={this.state.popUp.title}
                    message={this.state.popUp.message}
                    handlePopUpClose={this.handlePopUpClose} />

                <div className="top">
                    <div className="container">
                        <CheemsifyForm handleSubmit={this.handleSubmit}
                            showPopUp={this.showPopUp} />
                        <div className="feedback">
                            Si encuentras algun error, escribeme por <a href="https://www.facebook.com/FriedAvocado/" target="_blank">aquí</a> :).
                        </div>
                    </div>
                </div>

                <div className="bottom">
                    <div className="container">
                        <Showcase showPopUp={this.showPopUp} />
                        <Credits />
                    </div>
                </div>

            </div>
        );
    }
}
