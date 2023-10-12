// Personal info details


// Main component of details
function Details(){
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

export default Details