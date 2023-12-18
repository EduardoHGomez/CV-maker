import { useState } from 'react'

function ExperienceForm(props) {
    const [currentExperience, setCurrentExperience] = useState(props.data);


    const addNewExperience = () => {
        // First add values to CV
        props.toggleAdding();
        props.addExperience(currentExperience);
    }

    return (

        <div>

            <label>
                <b>Company</b>
                <input className='inputEditor-input'
                    type="text"
                    placeholder='Enter employer'
                    value={currentExperience.companyName}
                    onChange={(e) => setCurrentExperience({...currentExperience, companyName: e.target.value})}
                />
            </label>
            <label>
                <b>Job title</b>
                <input className='inputEditor-input'
                    type="text"
                    placeholder='Enter Job Title'
                    value={currentExperience.positionTitle}
                    onChange={(e) => setCurrentExperience({...currentExperience, positionTitle: e.target.value})}
                />
            </label>
            <label>
                <b>Description</b>
                <textarea className='inputEditor-input inputEditor-textarea'
                    type="textarea"
                    placeholder='Describe your role and achievements'
                    value={currentExperience.description}
                    onChange={(e) => setCurrentExperience({...currentExperience, description: e.target.value})}
                />
            </label>
            <label>
                <b>Start date</b>
                <input className='inputEditor-input'
                    type="text"
                    placeholder='Enter Start Date'
                    value={currentExperience.startDate}
                    onChange={(e) => setCurrentExperience({...currentExperience, startDate: e.target.value})}
                />
            </label>
            <label>
                <b>End date</b>
                <input className='inputEditor-input'
                    type="text"
                    placeholder='Enter End Date'
                    value={currentExperience.endDate}
                    onChange={(e) => setCurrentExperience({...currentExperience, endDate: e.target.value})}
                />
            </label>
            <label>
                <b>Location</b>
                <input className='inputEditor-input'
                    type="text"
                    placeholder='Enter Location'
                    value={currentExperience.location}
                    onChange={(e) => setCurrentExperience({...currentExperience, location: e.target.value})}
                />
            </label>

            <div className='inputEditor-addExperience-bottom'>
                <button className='inputEditor-button-cancel'
                onClick={props.toggleAdding}
                >
                    Cancel	
                </button>
                <button className='inputEditor-button-save'
                        onClick={addNewExperience} 
                >
                    <i className="fa-solid fa-check"></i> 
                    Save	
                </button>
            </div>

        </div>
    );
}

export default ExperienceForm;