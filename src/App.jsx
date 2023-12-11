import { useState } from 'react'
import './App.css'
import BasicInfoView from './components/views/BasicInfoView'
import BasicInfoEditor from './components/editors/BasicInfoEditor'

function App() {
	const data = {
		name: 'John',
		email: 'john@email.com',
		phone: '33-0000-1111'
	}

	return (
		<div className="container">
			<BasicInfoEditor/>
			<BasicInfoView data={data}/>
		</div>
	);
}

export default App;
