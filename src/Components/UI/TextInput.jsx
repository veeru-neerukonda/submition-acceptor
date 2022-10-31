import React from 'react';

import styles from './TextInput.module.css';

//* props.label: string
//* props.value: value to be passed in for two way binding
//* props.placeholder: string
//* props.inError: boolean - set if this component is in an error state
//* props.errorMessage: string - sets the error message to be displayed to the outside world
//* props.onChange: function(string) - triggers if the input has changed
//* props.type: string - set the type of the input; defaults to text if nothing is set or set to undefined or null
//* props.id: string - id for the input which is being encapsulated
//* props.inputRef - attach a ref to the input 
function TextInput(props) {

    let labelAttributes = {
        className: styles.label
    };
    let inputAttributes = {
        className: styles.input,
        placeholder: props.placeholder,
        type: props.type || 'text'
    };

    if(typeof props.id === 'string' || props.id instanceof String ){
        labelAttributes.htmlFor = props.id;
        inputAttributes.id = props.id;
    }

    if(props.value != undefined){
        inputAttributes.value = props.value;
    }
    if(props.onChange != undefined){
        inputAttributes.onChange = (e) => props.onChange(e.target.value);
    }

    if(props.inputRef != undefined || props.inputRef != null){
        inputAttributes.ref = props.inputRef;
    }

    return(
        <div className={`${styles.inputGroup} ${props.inError? styles.error : ''}`}>
            <label {...labelAttributes}>{props.label}</label>
            <input {...inputAttributes}></input>
            <p className={styles.errorMessage}>{props.errorMessage}</p>
        </div>
    );
}

export default TextInput;