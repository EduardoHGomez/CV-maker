// Personal info details
import React, {useState} from "react";

// Main component of details
function PersonalInfo(){
    const [personalInformation, setPersonalInformation] = 
    useState({
        'name': 'John', 
        'email': 'john@example.com',
        'phone': '12-3456-7890'
    })
    const [nameInput, setNameInput] = useState(personalInformation.name);
    const [emailInput, setEmailInput] = useState(personalInformation.email);

    return (
        <div className="details">
            <h1>Personal info</h1>
            <form className="detailsInput">
                <label>
                    Name:
                    <input className="name" type="text" value={nameInput}
                    onChange={(event) => {
                        setNameInput(event.target.value);
                        setPersonalInformation({...setPersonalInformation, name: event.target.value});
                    }}/>
                </label>
                <br></br>
                <label>
                    Email:
                    <input className="email" type="email" value={emailInput}
                    onChange={(event) => {
                        setEmailInput(event.target.value);
                        setPersonalInformation({...setPersonalInformation, email: event.target.value});
                    }}/>
                </label>
                <br></br>
                <label>
                    Phone number:
                    <input className="phone" type="number"></input>
                </label>
            </form>
        </div>
    )
}

export default PersonalInfo; 