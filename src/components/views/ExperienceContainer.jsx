import { useState } from 'react'
import ExperienceForm from './ExperienceForm';

function ExperienceContainer(props) {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = () => {
        setIsEditing(false);
    }

    return (
        <>
        {
            isEditing ?
            <ExperienceForm addExperience={props.addExperience} 
                            toggleEditing={toggleEditing}
            />
            :
            <div className="inputEditor-addExperience">
                <button onClick={() => setIsEditing(true)}>
                    <span>
                    <i className="fa-solid fa-plus"></i>Add Experience</span>	
                </button>
            </div>
        }
        </>
    );

}


export default ExperienceContainer;