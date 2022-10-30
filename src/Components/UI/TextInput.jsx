import React from 'react';

import styles from './TextInput.module.css';

//* props.label: string
//* props.placeholder: string
//* props.inError: boolean - set if this component is in an error state
function TextInput(props) {

    return(
        <div className={`${styles.inputGroup} ${props.inError? styles.error : ''}`}>
            <label className={styles.label} htmlFor="input">{props.label}</label>
            <input type="text" className={styles.input} placeholder={props.placeholder}></input>
            <p className={styles.errorMessage}>this is an error message</p>
        </div>
    );
}

export default TextInput;