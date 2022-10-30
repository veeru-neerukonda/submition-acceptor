import React from 'react';

import Card from'../UI/Card';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';

import styles from './InputForm.module.css'

function InputForm(){

    function submitEventHandler(e){
        e.preventDefault();
    }

    return(
        <Card>
            <form className={styles.form} onSubmit={submitEventHandler}>
                    <TextInput inError={false} label="Name" placeholder="enter your full name here"></TextInput>
                    <TextInput inError={false} label="Age" placeholder="enter your age here"></TextInput>
                    <Button label="Submit" className="ml-auto" />
            </form>
        </Card>
    );
}

export default InputForm;