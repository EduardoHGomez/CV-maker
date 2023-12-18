import { useState } from 'react'
import ExperienceForm from './ExperienceForm'
import ExperienceEditForm from './ExperienceEditForm'
import ExperiencesView from './ExperiencesView'

function ExperienceContainer(props) {
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentEditing, setCurrentEditing] = useState({});

    const toggleAdding = () => {
        setIsAdding(false);
    }

    const toggleEditing = (itemKey) => {
        setIsEditing(true);
        var result = props.data.filter(obj => {
            return obj.companyName === itemKey
        });
        setCurrentEditing(result[0]);
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
        return(
            <ExperienceEditForm
                toggleEditing={toggleEditing}
                data={currentEditing}
            />
        )
    } 
    else {
        return (
            <>
                <ExperiencesView 
                    experienceList={props.data}
                    toggleEditing={toggleEditing}
                />
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