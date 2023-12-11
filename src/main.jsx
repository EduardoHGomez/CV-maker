import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './App.css'
import PersonalInfo from './components/views/BasicInfoView.jsx'
import Greeting from './examples/Animals.jsx'
import Animals from './examples/Animals.jsx'
import App1 from './examples/App1.jsx'

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
    <App></App>
    </React.StrictMode>,
)
