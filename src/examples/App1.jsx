
function Button(props) {
    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize + 'px'
    }

    return (
        <button style={buttonStyle}>{props.text}</button>
    );
}


export default function App1() {
    return (
        <>
            <Button text="Click Me!" color="blue" fontSize={12}></Button>
            <Button text="Don't Click Me!" color="red" fontSize={14}></Button>
            <Button text="Click Me!" color="green" fontSize={16}></Button>
        </>
    );
}