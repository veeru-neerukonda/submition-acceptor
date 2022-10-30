import React from 'react';

import styles from './Button.module.css';

//* props.label - text inside the button 
//* props.className - transfered as is across to the button's class name
function Button(props) {
    return (
        <button className={`${styles.button} ${props.className}`} >{props.label}</button>
    );
}

export default Button;