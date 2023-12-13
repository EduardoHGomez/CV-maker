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
        <div>
            <h1>Education</h1>
            <p>School: {school}</p> 
            <p>Degree: {degree}</p> 
            <p>Start date: {startDate}</p> 
            <p>End date: {endDate}</p> 
            <p>Location: {location}</p> 
        </div>
    );
}

export default EducationView;