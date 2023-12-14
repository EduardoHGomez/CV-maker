import { useState } from 'react'
import './App.css'
import BasicInfoView from './components/views/BasicInfoView'
import EducationView from './components/views/EducationView'
import ExperienceView from './components/views/ExperienceView'

function App() {

	const [data, setData] = useState({
		BasicInfo: {
			name: 'Nathan Fielder',
			email: 'nathan@email.com',
			phone: '+38 44-0000-1111'
		},
		EducationInfo: {
			school: 'ITESO',
			degree: 'Bachelors Degree',
			startDate: '12-August-2022',
			endDate: '01-December-2025',
			location: 'Zapopan',
		},
		ExperienceInfo:
			[
				{
					'companyName': 'Coco',
					'positionTitle': 'Associate Producer',
					'description': 'I completed my daily tasks',
					'startDate': '01-January-1998',
					'endDate': '15-December-2022'
				},
				{
					'companyName': 'Dunder Mifflin',
					'positionTitle': 'Regional Manager',
					'description': 'Just hanging around',
					'startDate': '01-February-2004',
					'endDate': '07-August-2013'
				}
			]
		
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
					<h1>Education</h1>
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

				<hr/>

				<div>
					<h1>Experience</h1>
				</div>

			</div> {/* Left column div*/}

			<div className='rightColumn'>
				<BasicInfoView data={data.BasicInfo}/>
				<EducationView data={data.EducationInfo}/>
				<ExperienceView experienceList={data.ExperienceInfo}/>
			</div>
		</div>
	);
}

export default App;
