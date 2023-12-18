import { useState } from 'react'

function ExperienceItem(props){

    return (
        <div className="ExperienceItemEdit" 
        onClick={props.toggleEditing}
        >
            <h2>{props.experience.companyName}</h2>
            <i className="fa-regular fa-pen-to-square"></i>
        </div>
    );
}


function ExperiencesView(props) {

    const experienceList = props.experienceList;

    return (

        <div>
            {
                experienceList.map((experience) => {
                    return <ExperienceItem 
                    key={experience.companyName} 
                    experience={experience}
                    toggleEditing={props.toggleEditing}
                    />
                })
            }
        </div>

    );
}

export default ExperiencesView;