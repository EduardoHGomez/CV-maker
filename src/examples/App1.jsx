
function Button({text, color, fontSize, handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }

    return (
        <button onClick={() => handleClick('https://www.theodinproject.com')} style={buttonStyle}>{text}</button>
    );
}

Button.defaultProps = {
    text: "Default text",
    color: "brown",
    fontSize: 12
};


export default function App1() {

    const handleButtonClick = (url) => {
        window.location.href = url;
    };

    return (
        <>
            <Button text="Click Me!" color="blue" fontSize={12}></Button>
            <Button text="Don't Click Me!" color="red" fontSize={14}></Button>
            <Button text="Click Me!" color="green" fontSize={16}></Button>
            {/* Default props */}
            <Button></Button>

            {/* Props as functions */}
            <Button handleClick={() => handleButtonClick('http://www.google.com')} color="yellow"></Button>
            <Button handleClick={handleButtonClick} color="green"></Button>

        </>
    );
}