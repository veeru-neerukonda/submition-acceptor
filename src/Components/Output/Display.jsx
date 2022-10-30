import React from 'react';

import Card from '../UI/Card';

//* props.submitions: {id: string,name: string,age: +veNumber}[] - will display all of these submitions
function Display(props) {

    //donot display the card if there are no submitions to show
    if(props.submitions.length === 0)
        return;

    return (
        <Card>
            <div className='width-constrainer'>
                {props.submitions.map(submition => <h1 key={submition.id}>{`${submition.name} ${submition.age}`}</h1>)}    
            </div>
        </Card>
    );
}

export default Display;