import React from 'react';

import styles from './TextInput.module.css';

//* props.label: string
//* props.placeholder: string
//* props.inError: boolean - set if this component is in an error state
//* props.errorMessage: string - sets the error message to be displayed to the outside world
//* props.onChange: function(string) - triggers if the input has changed
function TextInput(props) {

    return(
        <div className={`${styles.inputGroup} ${props.inError? styles.error : ''}`}>
            <label className={styles.label} htmlFor="input">{props.label}</label>
            <input onChange={(e) => props.onChange(e.target.value)} type="text" className={styles.input} placeholder={props.placeholder}></input>
            <p className={styles.errorMessage}>{props.errorMessage}</p>
        </div>
    );
}

export default TextInput;