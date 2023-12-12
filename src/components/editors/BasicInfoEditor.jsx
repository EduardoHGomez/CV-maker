import React, {useState} from "react";

function BasicInfoEditor() {
    
    const [personalInfo, setPersonalInfo] = useState({
        name: 'John',
        email: 'john@email.com',
        phone: '44 3245 5521',
    });

    return (
        <div>
            <div>
                <h1>Personal Details</h1>
                <label>
                    Name:
                    <input 
                        type="text"
                        value={personalInfo.name}
                        onChange={(event) => setPersonalInfo({...personalInfo, name: event.target.value})}
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="text"
                        value={personalInfo.email}
                        onChange={(event) => setPersonalInfo({...personalInfo, email: event.target.value})}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        value={personalInfo.phone}
                        onChange={(event) => setPersonalInfo({...personalInfo, phone: event.target.value})}
                    />
                </label>
            </div>

            <div>
                <h1>Name:</h1>
                <p>{personalInfo.name}</p>
                <h1>Email:</h1>
                <p>{personalInfo.email}</p>
                <h1>Phone:</h1>
                <p>{personalInfo.phone}</p>
            </div>
        </div>
    );
}

export default BasicInfoEditor;