import React from 'react'
import {useState} from "react";

function Experience() {
    const [companyInput, setCompanyInput] = useState('Company 1');
    const [experienceInput, setExperienceInput] = useState('One year...');

    return (
        <div className="experienceContainer">
            <label>
                Company name:
                <input className="experienceCompnay" type="text" value={companyInput}
                onChange={(event) => {
                    setCompanyInput(event.target.value);
                }}/>
            </label>
            <label>
                Position:
                <input className="experiencePosition" type="text" value={experienceInput}
                onChange={(event) => {
                    setExperienceInput(event.target.value);
                }}/>
            </label>
            <label>
                Title:
                <input className="experienceTitle"></input>
            </label>
        </div>
    )

}

export default Experience;