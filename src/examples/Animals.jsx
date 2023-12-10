
function Animals() {
    const animals = ["Lion", "Lizard", "Dog", "Cat"];

    return (
        <div>
        <h1>
            Animals: </h1>
            <ul>
                {animals.map((animal) => {
                    return <li key={animal}>{animal}</li>
                })}
            </ul>
        </div>
    );
}



export default Animals