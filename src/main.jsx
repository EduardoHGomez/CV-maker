import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import CVTemplate from './components/CVTemplate'
import Greeting from './examples/Animals.jsx'

/*

    <div className="myContainer">
        <div className="inputContainer">
            <PersonalInfo/>
        </div>
        <div className="cvpart">
            <CVTemplate></CVTemplate>
        </div>
    </div>



*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Greeting></Greeting>
    </React.StrictMode>,
)
