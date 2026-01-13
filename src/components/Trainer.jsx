// props -> {name, age, specialism}

function Trainer({ name, age, specialism }) {

    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {(specialism && specialism.length > 1)  && <p>Specialism: {specialism}</p>}
        </>
    );


}

export default Trainer;