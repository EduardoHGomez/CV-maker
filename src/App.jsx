import { useState } from 'react'
import './App.css'
import BasicInfoView from './components/views/BasicInfoView'
import EducationView from './components/views/EducationView'

function App() {

	const [data, setData] = useState({
		BasicInfo: {
			name: 'Travis',
			email: 'travis@email.com',
			phone: '44-0000-1111'
		},
		EducationInfo: {
			school: 'ITESO',
			degree: 'Bachelors Degree',
			startDate: '12-August-2022',
			endDate: '01-December-2025',
			location: 'Zapopan',
		}
	});

	const handleBasicInfoChange = (newBasicInfo) => {
		setData({...data, BasicInfo: newBasicInfo});
	};

	const handleEducationChange= (newEducation) => {
		setData({...data, EducationInfo: newEducation});
	};

	return (
		<div className="container">

			<div>
				<div className="BasicInfoEditorContainer">
					<h1>Personal Details</h1>
					<label>
						Name
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
				</div>

				<hr/>

				<div className="EducationEditorContainer">
					<label> School: 
						<input 
							type="text"
							value={data.EducationInfo.school}
							onChange={(event) => handleEducationChange({...data.EducationInfo, school: event.target.value})}
						/>
					</label>
					<label> Degree: 
						<input 
							type="text"
							value={data.EducationInfo.degree}
							onChange={(event) => handleEducationChange({...data.EducationInfo, degree: event.target.value})}
						/>
					</label>
					<label> Start Date: 
						<input 
							type="text"
							value={data.EducationInfo.startDate}
							onChange={(event) => handleEducationChange({...data.EducationInfo, startDate: event.target.value})}
						/>
					</label>
					<label> End Date: 
						<input 
							type="text"
							value={data.EducationInfo.endDate}
							onChange={(event) => handleEducationChange({...data.EducationInfo, endDate: event.target.value})}
						/>
					</label>
					<label> Location: 
						<input 
							type="text"
							value={data.EducationInfo.location}
							onChange={(event) => handleEducationChange({...data.EducationInfo, location: event.target.value})}
						/>
					</label>
				</div>

			</div> {/* Left column div*/}

			<div className='rightColumn'>
				<BasicInfoView data={data.BasicInfo}/>
				<EducationView data={data.EducationInfo}/>
			</div>
		</div>
	);
}

export default App;
