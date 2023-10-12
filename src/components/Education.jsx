

function Education() {

    return (
        <div className="education">
            <h1>Education</h1>
            <form className="educationInput">
                <label>
                    School:
                    <input className="education-school"></input>
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