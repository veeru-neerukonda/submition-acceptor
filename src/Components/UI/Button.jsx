import React from 'react';

import styles from './Button.module.css';

//* props.label: string - text inside the button 
//* props.className: string - transfered as is across to the button's class name
//* props.type: string - set the type of the button; if undefined or null, button defaults to type = button
function Button(props) {
    return (
        <button className={`${styles.button} ${props.className}`} type={props.type || 'button'}>{props.label}</button>
    );
}

export default Button;