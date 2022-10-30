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
function TextInput(props) {

    //create label and input
    let label,input;
    if(typeof props.id === 'string' || props.id instanceof String ) {
        label = <label className={styles.label} htmlFor={props.id}>{props.label}</label>
        input = <input value={props.value} onChange={(e) => props.onChange(e.target.value)} type={props.type || 'text'} className={styles.input} placeholder={props.placeholder} id={props.id}></input>
    }
    else{
        label = <label className={styles.label}>{props.label}</label>
        input = <input value={props.value} onChange={(e) => props.onChange(e.target.value)} type={props.type || 'text'} className={styles.input} placeholder={props.placeholder}></input>
    }

    return(
        <div className={`${styles.inputGroup} ${props.inError? styles.error : ''}`}>
            {label}
            {input}
            <p className={styles.errorMessage}>{props.errorMessage}</p>
        </div>
    );
}

export default TextInput;