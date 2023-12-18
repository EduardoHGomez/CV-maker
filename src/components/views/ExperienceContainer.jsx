import { useState } from 'react'
import ExperienceForm from './ExperienceForm'
import ExperienceEdit from './ExperienceEditForm'
import ExperiencesView from './ExperiencesView'

function ExperienceContainer(props) {
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const toggleAdding = () => {
        setIsAdding(false);
    }

    const toggleEditing = () => {
        setIsEditing(false);
    }

    if (isAdding) {
        return (
            <ExperienceForm 
            addExperience={props.addExperience} 
            toggleAdding={toggleAdding}
            />
        );

    } 
    else if (isEditing) {
        <ExperienceEditForm
            toggleEditing={toggleEditing}
        />
    } 
    else {
        return (
            <>
                <ExperiencesView experienceList={props.data}/>
                <div className="inputEditor-addExperience">
                    <button onClick={() => setIsAdding(true)}>
                        <span>
                        <i className="fa-solid fa-plus"></i>Add Experience</span>	
                    </button>
                </div>
            </>
        );
    }


}


export default ExperienceContainer;