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
	const [showAddExperienceButton, setShowAddExperienceButton] = useState(true);
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
					'description': 'I completed my daily tasks',
					'startDate': '01/1998',
					'endDate': '04/2022',
					'location': 'New York City, US'
				},
				{
					'companyName': 'Dunder Mifflin',
					'positionTitle': 'Regional Manager',
					'description': 'Just hanging around',
					'startDate': '02/2004',
					'endDate': '08/2013',
					'location': 'Guadalajara, Mexico'
				}
			]
		
	});

	function cancelEdit() {
		// Delete all progress while adding a company (not necessary)
		setShowAddExperienceButton(true);
	}

	const handleBasicInfoChange = (newBasicInfo) => {
		setData({...data, BasicInfo: newBasicInfo});
	};

	const handleEducationChange= (newEducation) => {
		setData({...data, EducationInfo: newEducation});
	};

	
	function addExperience(message) {
		alert(message);
	}


	return (
		<div className="container">

			<div className="leftColumn">

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
							<ExperienceContainer handleTask={AddTask}
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

