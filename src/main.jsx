import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import './App.css'
import CVTemplate from './components/CVTemplate'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="mainContainer">
        <PersonalInfo/>
        <CVTemplate/>
    </div>
  </React.StrictMode>,
)
