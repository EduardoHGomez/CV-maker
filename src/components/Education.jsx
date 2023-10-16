

function Education() {
    const [educationInfo, setEducationInfo] = useState({
        'school': 'school1',
        'start-date': '2020-01-01',
        'graduation-date': '2024-01-01'
    })

    // Inputs
    const [schooInput, setSchoolInput] = useState('school1');

    return (
        <div className="education">
            <h1>Education</h1>
            <form className="educationInput">
                <label>
                    School:
                    <input className="text" type="tel" value={phoneInput}
                    onChange={(event) => {
                        setPhoneInput(event.target.value);
                        setPersonalInformation({...setPersonalInformation, phone: event.target.value});
                    }}/>
                </label>
                <br></br>
                <label>
                    Start date:
                    <input className="education-start" type="date"></input>
                </label>
                <br></br>
                <label>
                    Graduation date:
                    <input className="education-graduation" type="date"></input>
                </label>
            </form>
        </div>

    )
}

export default Education;