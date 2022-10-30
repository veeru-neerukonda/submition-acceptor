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
            <div className={`${styles.column} width-constrainer`}>
                {props.submitions.map(submition => <h1 className={styles.row} key={submition.id}>
                    <span>{submition.name}</span><span>{submition.age}</span>
                </h1>)}    
            </div>
        </Card>
    );
}

export default Display;