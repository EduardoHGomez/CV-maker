
function ExperienceItem(props){

    return (
        <div className="ExperienceItemEdit" 
            onClick={props.toggleEdit}
        >
            <h2>{props.experience.companyName}</h2>
            <i className="fa-regular fa-pen-to-square"></i>
        </div>
    );
}


function ExperienceEdit(props) {

    const experienceList = props.experienceList;

    return (

        <div>
            {
                experienceList.map((experience) => {
                    return <ExperienceItem 
                    key={experience.companyName} 
                    toggleEdit={props.toggleEdit}
                    experience={experience}/>
                })
            }
        </div>

    );
}

export default ExperienceEdit;