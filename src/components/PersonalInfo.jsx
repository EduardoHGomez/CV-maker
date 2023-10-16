// Personal info details
import React, {useState} from "react";

// Main component of details
function PersonalInfo(){
    const [personalInformation, setPersonalInformation] = useState({'name': 'John', 'email': 'john@example.com',
                                                                    'phone': '12-3456-7890'})

    return (
        <div className="details">
            <h1>Personal info</h1>
            <form className="detailsInput">
                <label>
                    Name:
                    <input className="name"></input>
                </label>
                <br></br>
                <label>
                    Email:
                    <input className="name" type="email"></input>
                </label>
                <br></br>
                <label>
                    Phone number:
                    <input className="name" type="number"></input>
                </label>
            </form>
        </div>
    )
}

export default PersonalInfo; 