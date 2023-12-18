import { useState } from 'react'
import ExperienceForm from './ExperienceForm'
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

    const cancelEditing = () => {
        setIsEditing(false);
        setIsAdding(false);
    }

    if (isAdding) {
        return (
            <ExperienceForm 
                saveButtonFunction={props.saveButtonFunction}
                status={"adding"}
                cancelButtonFunction={toggleAdding}
            />
        );

    } 
    else if (isEditing) {
        return(
            <ExperienceForm
                saveButtonFunction={props.saveButtonFunction}
                toggleEditing={toggleEditing}
                cancelButtonFunction={cancelEditing}
                data={currentEditing}
                status={"editing"}
            />
        );
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