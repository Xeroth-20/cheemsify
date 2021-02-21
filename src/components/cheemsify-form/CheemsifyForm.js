import React, { useState } from 'react';

/* Components */
import { Toggle } from './../toggle/Toggle';
import { Button } from './../Button/Button';
import { P } from './../p/P';

/* Functions */
import { cheemsify } from './../../functions/cheemsify';

/* Styles */
import './CheemsifyForm.scss';

export const CheemsifyForm = (props) => {
    const [formState, setFormState] = useState({
        text: '',
        valid: false
    });

    const [allowSubmit, setAllowSubmit] = useState(false);
    const [cheemsifiedText, setCheemsifiedText] = useState(cheemsify(props.placeholder));

    const handleChange = ({ target }) => {
        setFormState({
            text: target.value,
            valid: validateForm(target.value)
        });
    };

    const handleToggle = ({ target }) => {
        setAllowSubmit(target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        assignResult();
        if (allowSubmit) props.handleSubmit(formState);
    };

    const validateForm = (text) => {
        const minlength = 1;

        return minlength <= text.trim().length;
    };

    const assignResult = () => {
        const cheemsifiedText = formState.valid
            ? cheemsify(formState.text.trim())
            : 'Escribe algo :(';
        setCheemsifiedText(cheemsifiedText);
    };

    const cleanForm = () => {
        setFormState({
            text: '',
            valid: false
        });
        setCheemsifiedText(cheemsify(props.placeholder));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(cheemsifiedText);
    };

    return (
        <form className="cheemsify-form" style={props.style} onSubmit={handleSubmit}>

            <header className="form-header">
                <h1 className="form-header-title">
                    CHEEMSIFY
                </h1>
            </header>

            <div className="form-control-container">
                <label htmlFor="text">
                    Ingresa el texto a convertir
                </label>
                <input id="text" className="form-control"
                    onChange={handleChange}
                    type="text"
                    placeholder={props.placeholder}
                    value={formState.text} />
            </div>

            <div className="form-control-container">
                <Toggle id="tg-allow-submit"
                    title={{ active: 'Desactivar envio', notactive: 'Activar envio' }}
                    handleChange={handleToggle}
                    value={allowSubmit}
                    style={{ justifyContent: 'space-between' }}>
                    Enviar traducción
                </Toggle>
            </div>

            <div className="form-control-container">
                <Button type={'submit'}>
                    CHEEMSIFICAR
                </Button>
            </div>

            <div className="separator"></div>

            <div className="form-result">
                <div className="form-result-header">
                    <h2 className="result-header-title">
                        Resultado
                    </h2>
                    <div className="form-option-group">
                        <div className="form-option-icon unselectable" title="Borrar resultado"
                            onClick={cleanForm}>
                            <img className="icon" src="/assets/sweeping-icon.svg" alt="Icono borrar" />
                        </div>
                        <div className="form-option-icon unselectable" title="Copiar al portapapeles"
                            onClick={copyToClipboard}>
                            <img className="icon" src="/assets/copy-icon.svg" alt="Icono copiar" />
                        </div>
                    </div>
                </div>
                <div className="form-result-body">
                    <P style={{ wordBreak: 'break-word', marginBottom: 0 }}>
                        {cheemsifiedText}
                    </P>
                </div>
            </div>

        </form>
    );
};

CheemsifyForm.defaultProps = {
    placeholder: 'Contexto él tenia una...'
};
