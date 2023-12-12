import { useState } from 'react'
import './App.css'
import BasicInfoView from './components/views/BasicInfoView'
import BasicInfoEditor from './components/editors/BasicInfoEditor'

function App() {

	const [data, setData] = useState({
		BasicInfo: {
			name: 'Travis',
			email: 'travis@email.com',
			phone: '44-0000-1111'
		}
	});

	const handleBasicInfoChange = (newBasicInfo) => {
		
		setData({...data, BasicInfo: newBasicInfo});
	};

	return (
		<div className="container">
			<div>
                <h1>Personal Details</h1>

			</div>
			<BasicInfoView data={data.BasicInfo}/>
		</div>
	);
}

export default App;
