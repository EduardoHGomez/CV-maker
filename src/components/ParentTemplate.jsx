import React from 'react'
import {useState} from "react";
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
// This file was made for testing purposes: view the effect of an input to a cv template

function ContainerTest(props) {
    return (
        <div>
        <label>
            Writing on the next container:
            <input type="text">

            </input>
        </label>


        </div>

    );
}

function ParentTemplate() {
    const [textInput, setTextInput] = useState('');

    return (
        <div>
            <h1>New Container</h1>
            <Experience/>
            <ContainerTest/>

        </div>
    );
}

export default ParentTemplate;