import { useState } from 'react'

function ExperienceContainer(props) {

    return (
        <div className="inputEditor-addExperience">
            <button onClick={props.handleTask}>
                <span>
                <i className="fa-solid fa-plus"></i>Add Experience</span>	
            </button>
        </div>
    )



        return (
            <div>

                <label>
                    <b>Company</b>
                    <input className='inputEditor-input'
                        type="text"
                        placeholder='Enter employer'
                        value={currentEditInformation.company}
                        onChange={(event) => handleEditInformation({...currentEditInformation, company: event.target.value})}
                    />
                </label>
                <label>
                    <b>Job title</b>
                    <input className='inputEditor-input'
                        type="text"
                        placeholder='Enter Job Title'
                        value={currentEditInformation.positionTitle}
                        onChange={(event) => handleEditInformation({...currentEditInformation, positionTitle: event.target.value})}
                    />
                </label>
                <label>
                    <b>Description</b>
                    <textarea className='inputEditor-input inputEditor-textarea'
                        type="textarea"
                        placeholder='Describe your role and achievements'
                        value={currentEditInformation.description}
                        onChange={(event) => handleEditInformation({...currentEditInformation, description: event.target.value})}
                    />
                </label>
                <label>
                    <b>Start date</b>
                    <input className='inputEditor-input'
                        type="text"
                        placeholder='Enter Start Date'
                        value={currentEditInformation.startDate}
                        onChange={(event) => handleEditInformation({...currentEditInformation, startDate: event.target.value})}
                    />
                </label>
                <label>
                    <b>End date</b>
                    <input className='inputEditor-input'
                        type="text"
                        placeholder='Enter End Date'
                        value={currentEditInformation.endDate}
                        onChange={(event) => handleEditInformation({...currentEditInformation, endDate: event.target.value})}
                    />
                </label>

                <div className='inputEditor-addExperience-bottom'>
                    <button className='inputEditor-button-cancel'
                            onClick={cancelEdit}>
                        Cancel	
                    </button>
                    <button className='inputEditor-button-save'>
                        <i className="fa-solid fa-check"></i> 
                        Save	
                    </button>
                </div>

            </div>

        )
        
}


export default ExperienceContainer;