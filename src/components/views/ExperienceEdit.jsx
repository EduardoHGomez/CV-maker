
function ExperienceItem(props){

    return (
        <div className="ExperienceItemEdit">
            <h2>{props.experience.companyName}</h2>
            <i className="fa-regular fa-pen-to-square"></i>
        </div>
    );
}


function ExperienceEdit(props) {

    const experienceList = props.experienceList;
    console.log(experienceList);

    return (

        <div>
            {
                experienceList.map((experience) => {
                    return <ExperienceItem key={experience.companyName} experience={experience}/>
                })
            }
        </div>

    );
}

export default ExperienceEdit;