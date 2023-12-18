import { useState } from 'react'
import './App.css'
import BasicInfoView from './components/views/BasicInfoView'
import EducationView from './components/views/EducationView'
import ExperienceView from './components/views/ExperienceView'
import ExperienceContainer from './components/views/ExperienceContainer'


function App() {
	const [showBasicInfo, setShowBasicInfo] = useState(false);
	const [showEducation, setShowEducation] = useState(false);
	const [showExperience, setShowExperience] = useState(true);
	const [data, setData] = useState({
		BasicInfo: {
			name: 'Nathan Fielder',
			email: 'nathan@email.com',
			phone: '+38 44-0000-1111'
		},
		EducationInfo: {
			school: 'London City University',
			degree: 'B.Eng. in Computer Systems',
			startDate: '12/08/2022',
			endDate: '01/12/2026',
			location: 'Zapopan, Jalisco, Mexico',
		},
		ExperienceInfo:
			[
				{
					'companyName': 'Coco',
					'positionTitle': 'Associate Producer',
					'description': 'In my capacity as an Associate Producer for Coco, I conscientiously handled daily tasks\
					effective communication, contributing significantly to the successful execution of the production.',

					'startDate': '01/1998',
					'endDate': '04/2022',
					'location': 'New York City, US'
				},
				{
					'companyName': 'Dunder Mifflin',
					'positionTitle': 'Regional Manager',
					'description': 'As the Regional Manager at Dunder Mifflin, I oversaw operations and \
					led a team toward common objectives. My role involved strategic planning, team motivation, and ensuring \
					smooth day-to-day functioning. I maintained a positive work environment \
					while contributing to the company success.',
					'startDate': '02/2004',
					'endDate': '08/2013',
					'location': 'Guadalajara, Mexico'
				}
			]
		
	});


	const handleBasicInfoChange = (newBasicInfo) => {
		setData({...data, BasicInfo: newBasicInfo});
	};

	const handleEducationChange= (newEducation) => {
		setData({...data, EducationInfo: newEducation});
	};

	
	function saveButtonFunction(option, message) {
		if (option === 'adding') {
			let newData = {...data};
			newData.ExperienceInfo.push(message);
			setData(newData);
		}
		else if (option === 'editing') {
			// Fin the element
			let newData = {...data};
			const index = newData.ExperienceInfo.findIndex((experience) => experience.companyName === message.companyName);
			newData.ExperienceInfo[index] = message;
			setData(newData);
		}
	}

	function printCV() {
		print();
	}

	function resetValues() {
		setData({
		BasicInfo: {
			name: 'Nathan Fielder',
			email: 'nathan@email.com',
			phone: '+38 44-0000-1111'
		},
		EducationInfo: {
			school: 'London City University',
			degree: 'B.Eng. in Computer Systems',
			startDate: '12/08/2022',
			endDate: '01/12/2026',
			location: 'Zapopan, Jalisco, Mexico',
		},
		ExperienceInfo:
			[
				{
					'companyName': 'Coco',
					'positionTitle': 'Associate Producer',
					'description': 'In my capacity as an Associate Producer for Coco, I conscientiously handled daily tasks\
					effective communication, contributing significantly to the successful execution of the production.',

					'startDate': '01/1998',
					'endDate': '04/2022',
					'location': 'New York City, US'
				},
				{
					'companyName': 'Dunder Mifflin',
					'positionTitle': 'Regional Manager',
					'description': 'As the Regional Manager at Dunder Mifflin, I oversaw operations and \
					led a team toward common objectives. My role involved strategic planning, team motivation, and ensuring \
					smooth day-to-day functioning. I maintained a positive work environment \
					while contributing to the company success.',
					'startDate': '02/2004',
					'endDate': '08/2013',
					'location': 'Guadalajara, Mexico'
				}
			]
		
	})
	}

	return (
		<div className="container">

			<div className="leftColumn">
				<div className="leftColumn-header">
					<button onClick={resetValues} className='leftColumn-header-delete'>
						<i class="fa-solid fa-trash"></i>
						Default values
					</button>
					<button onClick={printCV} className='leftColumn-header-print'>
						<i class="fa-solid fa-print"></i>
						Print
					</button>

				</div>

				<div className="inputEditor">
					<div className="inputEditor-header"
					onClick={() => setShowBasicInfo(!showBasicInfo)} 
					onMouseDown={(event) => event.preventDefault()}>
						<i className="fa-solid fa-user"></i>
						<h2>Basic information</h2>
						<i className="fa-solid fa-angle-down"></i>
					</div>
					{
						showBasicInfo? (
						<div> 
							<label>
								<b>Name</b>
								<input className='inputEditor-input'
									type="text"
									value={data.BasicInfo.name}
									onChange={(event) => handleBasicInfoChange({...data.BasicInfo, name: event.target.value})}
								/>
							</label>
							<label>
								<b>Email</b>
								<input className='inputEditor-input'
									type="text"
									value={data.BasicInfo.email}
									onChange={(event) => handleBasicInfoChange({...data.BasicInfo, email: event.target.value})}
								/>
							</label>
							<label>
								<b>Phone</b>
								<input className='inputEditor-input'
									type="text"
									value={data.BasicInfo.phone}
									onChange={(event) => handleBasicInfoChange({...data.BasicInfo, phone: event.target.value})}
								/>
							</label>
						</div>
							
						): null
					}
				</div>

				<hr/>

				<div className="inputEditor">
					<div className='inputEditor-header'
					onClick={() => setShowEducation(!showEducation)} 
				  	onMouseDown={(event) => event.preventDefault()}>
						<i className="fa-solid fa-user-graduate"></i>
						<h2>Education</h2>
						<i className="fa-solid fa-angle-down"></i>
					</div>
					{
						showEducation ? 
						<div>
							<label> 
								<b>School</b>
								<input className='inputEditor-input'
									type="text"
									value={data.EducationInfo.school}
									onChange={(event) => handleEducationChange({...data.EducationInfo, school: event.target.value})}
								/>
							</label>
							<label>
								<b>Degree</b>
								<input className='inputEditor-input'
									type="text"
									value={data.EducationInfo.degree}
									onChange={(event) => handleEducationChange({...data.EducationInfo, degree: event.target.value})}
								/>
							</label>
							<label>
								<b>Start date</b>
								<input className='inputEditor-input'
									type="text"
									value={data.EducationInfo.startDate}
									onChange={(event) => handleEducationChange({...data.EducationInfo, startDate: event.target.value})}
								/>
							</label>
							<label> 
								<b>End date</b>
								<input className='inputEditor-input'
									type="text"
									value={data.EducationInfo.endDate}
									onChange={(event) => handleEducationChange({...data.EducationInfo, endDate: event.target.value})}
								/>
							</label>
							<label>
								<b>Location</b>
								<input className='inputEditor-input'
									type="text"
									value={data.EducationInfo.location}
									onChange={(event) => handleEducationChange({...data.EducationInfo, location: event.target.value})}
								/>
							</label>
						</div>
						: null
					}
				</div>

				<hr/>

				<div className="inputEditor">
					<div className='inputEditor-header'
					onClick={() => setShowExperience(!showExperience)} 
				  	onMouseDown={(event) => event.preventDefault()}>
						<i className="fa-solid fa-briefcase"></i>
						<h2>Experience</h2>
						<i className="fa-solid fa-angle-down"></i>
					</div>

					{
						showExperience ? 
						<ExperienceContainer 
						saveButtonFunction={saveButtonFunction}
						data={data.ExperienceInfo}
						/>
						: null
					}

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

