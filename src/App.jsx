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
				<label>
					<input 
						type="text"
						value={data.BasicInfo.name}
						onChange={(event) => handleBasicInfoChange({...data.BasicInfo, name: event.target.value})}
					/>
				</label>
                <label>
                    Email:
                    <input 
                        type="text"
                        value={data.BasicInfo.email}
                        onChange={(event) => handleBasicInfoChange({...data.BasicInfo, email: event.target.value})}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        value={data.BasicInfo.phone}
                        onChange={(event) => handleBasicInfoChange({...data.BasicInfo, phone: event.target.value})}
                    />
                </label>

				<hr/>

				<label>
					<input 
						type="text"
						value={data.BasicInfo.name}
						onChange={(event) => handleBasicInfoChange({...data.BasicInfo, name: event.target.value})}
					/>
				</label>
                <label>
                    Email:
                    <input 
                        type="text"
                        value={data.BasicInfo.email}
                        onChange={(event) => handleBasicInfoChange({...data.BasicInfo, email: event.target.value})}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        value={data.BasicInfo.phone}
                        onChange={(event) => handleBasicInfoChange({...data.BasicInfo, phone: event.target.value})}
                    />
                </label>

			</div> {/* Left column div*/}
			<BasicInfoView data={data.BasicInfo}/>
		</div>
	);
}

export default App;
