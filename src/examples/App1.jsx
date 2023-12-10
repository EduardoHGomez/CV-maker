
function Button({text, color, fontSize}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }

    return (
        <button style={buttonStyle}>{text}</button>
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