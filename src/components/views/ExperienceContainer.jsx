import { useState } from 'react'

function ExperienceContainer(props) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
        {
            isEditing ?
            <h1>Editing</h1>
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