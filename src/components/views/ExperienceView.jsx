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
            <p><b>Company: </b>{experienceInformation.companyName}</p>
            <p><b>Position title: </b>{experienceInformation.positionTitle}</p>
            <p><b>Description: </b>{experienceInformation.description}</p>
            <p><b>Start date: </b>{experienceInformation.startDate}</p>
            <p><b>End date: </b>{experienceInformation.endDate}</p>
            <hr/>
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