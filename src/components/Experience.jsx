

function Experience() {
    const [companyInput, setCompanyInput] = useState('Company 1');

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
                <input className="experiencePositon"></input>
            </label>
            <label>
                Title:
                <input className="experienceTitle"></input>
            </label>
        </div>
    )

}

export default Experience;