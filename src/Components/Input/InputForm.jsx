import React, { useState,useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from'../UI/Card';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';

import styles from './InputForm.module.css'

//* onNewSubmition: function(object: {id,name,age}) - a new submition  was successfully recieved by the input form in question
function InputForm(props){

    const [nameErrorMessage,setNameErrorMessage] = useState("");
    const [ageErrorMessage,setAgeErrorMessage] = useState("");
    const [nameInError,setNameInError] = useState(false)
    const [ageInError,setAgeInError] = useState(false);

    let nameRef = useRef();
    let ageRef  = useRef();

    function submitEventHandler(e){
        e.preventDefault();

        let name = nameRef.current.value;
        let age = ageRef.current.value;
        
        let inBadState = false;
        
        if(name === ""){
            setNameErrorMessage("the name field cannot be left empty.");
            setNameInError(true);
            inBadState = true;
        }
        else if(!isNaN(name[0])){
            setNameErrorMessage("the name field cannot start with a number");
            setNameInError(true);
            inBadState = true;
        }
        else{
            setNameErrorMessage("this message was set after determining that there is no error in the Inputted Name; the message must not be displayed as such");
            setNameInError(false);
        }

        if(age === ""){
            setAgeErrorMessage("the age field cannot be left empty.")
            setAgeInError(true);
            inBadState = true;
        }
        else if(isNaN(age)){
            setAgeErrorMessage("please enter a valid age");
            setAgeInError(true);
            inBadState = true;
        }
        else if(Number.parseInt(age) < 0){
            setAgeErrorMessage("Age value cannot be negative");
            setAgeInError(true);
            inBadState = true;
        }
        else{
            setAgeErrorMessage("this message was set after determining that there is no error in the Inputted Age; the message must not be displayed as such");
            setAgeInError(false);
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
            nameRef.current.value = "";
            ageRef.current.value = "";
            setAgeInError(false);
            setNameInError(false);
            setAgeErrorMessage('this message was set while clearing the input form after a successful submition; donot ever display this message');
            setNameErrorMessage('this message was set while clearing the input form after a successful submition; donot ever display this message');
        }
    }

    return(
        <Card className="mt-10">
            <form className={`${styles.form} width-constrainer`} onSubmit={submitEventHandler}>
                <TextInput
                    inError={nameInError} 
                    errorMessage={nameErrorMessage} 
                    label="Name"
                    id="nameInputField"
                    inputRef={nameRef}
                    placeholder="enter your full name here">
                </TextInput>
                <TextInput
                    inError={ageInError} 
                    errorMessage={ageErrorMessage} 
                    label="Age"
                    id="ageInputField"
                    inputRef={ageRef}
                    placeholder="enter your age here">
                </TextInput>
                <Button type="submit" label="Submit" className="ml-auto" />
            </form>
        </Card>
    );
}

export default InputForm;