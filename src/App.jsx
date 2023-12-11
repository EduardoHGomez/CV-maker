import { useState } from 'react'
import './App.css'
import BasicInfoView from './components/views/BasicInfoView'
import BasicInfoEditor from './components/editors/BasicInfoEditor'

function App() {

	return (
		<div className="container">
			<BasicInfoEditor/>
		</div>
	);
}

export default App;
