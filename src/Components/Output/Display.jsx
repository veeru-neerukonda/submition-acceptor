import React from 'react';
import styles from './Display.module.css';

import Card from '../UI/Card';

//* props.submitions: {id: string,name: string,age: +veNumber}[] - will display all of these submitions
function Display(props) {

    //donot display the card if there are no submitions to show
    if(props.submitions.length === 0)
        return;

    return (
        <Card>
            <ul className={`${styles.column} width-constrainer`}>
                {props.submitions.map(submition => <li className={styles.row} key={submition.id}>
                    <span>{submition.name}</span><span>{submition.age}</span>
                </li>)}    
            </ul>
        </Card>
    );
}

export default Display;