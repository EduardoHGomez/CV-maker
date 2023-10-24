import React from 'react'
import {useState} from "react";
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
// This file was made for testing purposes: view the effect of an input to a cv template

function ParentTemplate() {
    const [textInput, setTextInput] = useState('');

    return (
        <div>
            <h1>New Container</h1>

        </div>
    );
}

export default ParentTemplate;