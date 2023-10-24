// Personal info details
import React, {useState} from "react";
import CVTemplate from "./CVTemplate";

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
    const [phoneInput, setPhoneInput] = useState(personalInformation.phone);

    return (
        <div className="myContainer">
            <div className="details">
                <h1>Personal info</h1>
                <form className="detailsInput">
                    <label>
                        Name:
                        <input className="name" type="text" value={nameInput}
                        onChange={(event) => {
                            setNameInput(event.target.value);
                            setPersonalInformation({...personalInformation, name: event.target.value});
                        }}/>
                    </label>
                    <br></br>
                    <label>
                        Email:
                        <input className="email" type="email" value={emailInput}
                        onChange={(event) => {
                            setEmailInput(event.target.value);
                            setPersonalInformation({...personalInformation, email: event.target.value});
                        }}/>
                    </label>
                    <br></br>
                    <label>
                        Phone number:
                        <input className="number" type="tel" value={phoneInput}
                        onChange={(event) => {
                            setPhoneInput(event.target.value);
                            setPersonalInformation({...personalInformation, phone: event.target.value});
                        }}/>
                    </label>
                </form>
            </div>
            <div>
                <CVTemplate/>
            </div>
        </div>
    );
}

export default PersonalInfo; 