
function ListItem(props) {
    return (
        <li key={props.animal}>{props.animal}</li>
    );
}

function List(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith("L") ? <ListItem key={animal} animal={animal}/> : null;
            })}
        </ul>
    );
}

function Animals() {
    const animals = ["Lion", "Lizard", "Cat", "Dog"];

    return (
        <div>
        <h1>
            Animals: </h1>
            <List animals={animals}></List>
        </div>
    );
}



export default Animals