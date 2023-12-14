// Personal info details
import React, {useState} from "react";

function EducationView(props) {
    const {
        school,
        degree,
        startDate,
        endDate,
        location
    } = props.data;


    return (
        <div className="EducationInfoView">
            <div className="EduationInfoViewHeader">
                <h2>Education</h2>
            </div>
            <div className="EducationInfoViewBody">
                <div className="EducationInfoViewBodyLeft">
                    <b>{degree}</b>
                    <b>{school}</b>
                </div>
                <div className="EducationInfoViewBodyRight">
                    <p>{startDate} - {endDate}</p> 
                    <p>{location}</p> 
                </div>
            </div>
        </div>
    );
}

export default EducationView;