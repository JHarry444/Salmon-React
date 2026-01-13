// props -> {name, age, specialism}

function Trainer({ name, age, specialism, onClick }) {



    return (
        <div onClick={onClick}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {(specialism && specialism.length > 1)  && <p>Specialism: {specialism}</p>}
        </div>
    );


}

export default Trainer;