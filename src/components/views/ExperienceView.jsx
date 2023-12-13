import React, {useState} from "react";

// Next function returns each user's experience
function ExperienceItem(props){
    const {
        keyCompany,
        experienceInformation
    } = props;

    console.log(experienceInformation);
    return (
        <>

        </>
    );
}


// Receives a List [] of all the experiences
function ExperienceView(props) {

    const experienceList = props.experienceList;

    return (
        <div>
            <h1>Experience</h1>
            {experienceList.map((job) => {
                    return <ExperienceItem key={job.companyName} experienceInformation={job}/>;
                }
            )}
        </div>
    )

}

export default ExperienceView;