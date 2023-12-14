import React, {useState} from "react";

// Next function returns each user's experience
function ExperienceItem(props){
    const {
        keyCompany,
        experienceInformation
    } = props;

    return (
        <div className="ExperienceItem">
            <div>
                <p>{experienceInformation.startDate} - {experienceInformation.endDate} </p>
                <p>{experienceInformation.location}</p>
            </div>
            <div>
                <p><b>{experienceInformation.companyName}</b></p>
                <p><i>{experienceInformation.positionTitle}</i></p>
                <p>{experienceInformation.description}</p>
                <br></br>
            </div>
        </div>
    );
}


// Receives a List [] of all the experiences
function ExperienceView(props) {

    const experienceList = props.experienceList;

    return (
        <div className="ExperienceContainer">
        <div className="ExperienceContainer-header" style={{display: 'grid'}}>
            <h2>Professional Experience</h2>
        </div>
            <div>
                {experienceList.map((job) => {
                        return <ExperienceItem key={job.companyName} experienceInformation={job}/>;
                    }
                )}
            </div>
        </div>
    )

}

export default ExperienceView;