// props -> {name, age, specialism}

function Trainer({name, age, specialism="Software"}) {
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Specialism: {specialism}</p>
        </>);
}

export default Trainer;