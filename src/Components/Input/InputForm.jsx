import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from'../UI/Card';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';

import styles from './InputForm.module.css'

//* onNewSubmition: function(object: {id,name,age}) - a new submition  was successfully recieved by the input form in question
function InputForm(props){

    let name="",age="";
    const [nameErrorMessage,setNameErrorMessage] = useState("");
    const [ageErrorMessage,setAgeErrorMessage] = useState("");
    const [nameInError,setNameInError] = useState(false)
    const [ageInError,setAgeInError] = useState(false);

    function submitEventHandler(e){
        e.preventDefault();
        
        let inBadState = false;
        
        if(name === ""){
            setNameErrorMessage("the name field cannot be left empty.");
            setNameInError(true);
            inBadState = true;
        }
        if(age === ""){
            setAgeErrorMessage("the age field cannot be left empty.")
            setAgeInError(true);
            inBadState = true;
        }

        if(!Number.parseInt(age)){
            setAgeErrorMessage("please enter a valid age");
            setAgeInError(true);
            inBadState = true;
        }

        //only accept submition if it is not in a bad state
        if(inBadState === false){
            props.onNewSubmition(
                {
                    id: uuidv4(),
                    name,age
                }
            );
        }
    }

    return(
        <Card>
            <form className={styles.form} onSubmit={submitEventHandler}>
                <TextInput 
                    onChange={newName => name=newName} 
                    inError={nameInError} 
                    errorMessage={nameErrorMessage} 
                    label="Name" 
                    placeholder="enter your full name here">
                </TextInput>
                <TextInput 
                    onChange={newAge => age=newAge} 
                    inError={ageInError} 
                    errorMessage={ageErrorMessage} 
                    label="Age" 
                    placeholder="enter your age here">
                </TextInput>
                <Button label="Submit" className="ml-auto" />
            </form>
        </Card>
    );
}

export default InputForm;