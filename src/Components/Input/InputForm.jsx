import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from'../UI/Card';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';

import styles from './InputForm.module.css'

//* onNewSubmition: function(object: {id,name,age}) - a new submition  was successfully recieved by the input form in question
function InputForm(props){

    const [name, setName] = useState("");
    const [age,setAge] = useState("");
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
        else if(!Number.parseInt(age)){
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

            //clear all the fields once submition is handled
            setName("");
            setAge("");
            setAgeInError(false);
            setNameInError(false);
            setAgeErrorMessage('this message was set while clearing the input form after a successful submition; donot ever display this message');
            setNameErrorMessage('this message was set while clearing the input form after a successful submition; donot ever display this message');
        }
    }

    return(
        <Card>
            <form className={`${styles.form} width-constrainer`} onSubmit={submitEventHandler}>
                <TextInput
                    onChange={newName => setName(newName)} 
                    inError={nameInError} 
                    errorMessage={nameErrorMessage} 
                    label="Name"
                    value={name}
                    placeholder="enter your full name here">
                </TextInput>
                <TextInput 
                    onChange={newAge => setAge(newAge)} 
                    inError={ageInError} 
                    errorMessage={ageErrorMessage} 
                    label="Age"
                    value={age}
                    placeholder="enter your age here">
                </TextInput>
                <Button label="Submit" className="ml-auto" />
            </form>
        </Card>
    );
}

export default InputForm;