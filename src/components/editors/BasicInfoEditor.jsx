import React, {useState} from "react";

function BasicInfoEditor() {
    
    const [personalInfo, setPersonalInfo] = useState({
        name: 'John',
        email: 'john@email.com',
        phone: '44 3245 5521',
    });

    // ---------- Input fields -----------
    const [name, setName] = useState('Name');
    const [email, setEmail] = useState('email@example.com');
    const [phone, setPhone] = useState('33 0000 00000');

    return (
        <div>
            <div>
                <h1>Personal Details</h1>
                <label>
                    Name:
                    <input 
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </label>
            </div>

            <div>
                <h1>Name:</h1>
                <p>{name}</p>
                <h1>Email:</h1>
                <p>{email}</p>
                <h1>Phone:</h1>
                <p>{phone}</p>
            </div>
        </div>
    );
}

export default BasicInfoEditor;