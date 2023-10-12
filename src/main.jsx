import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Details from './components/Details'
import Education from './components/Education'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Details/>
    <Education/>
  </React.StrictMode>,
)
