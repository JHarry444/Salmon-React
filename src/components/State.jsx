import { useState } from "react";

function State() {

    const [count, setCount] = useState(0);

    const [miles, setMiles] = useState(1);
    const [kms, setKms] = useState(1.6);
    return (
        <>
            <h2>State</h2>
            <section>
                <h3>Counter</h3>
                <input type="number" readOnly value={count} /><button onClick={() => setCount(count + 1)}>+</button>
            </section>
            <section>
                <h3>Converter</h3>
                <div style={{
                    "display": "grid",
                    "gridTemplateColumns": "1fr 3fr",
                    "justifyItems": "start",
                    "gap": "5px"
                }}>
                    <label htmlFor="miles">Miles</label>
                    <input type="number" id="miles" value={miles} onChange={function (event) {
                        const newMiles = parseFloat(event.target.value);
                        setMiles(newMiles);
                        setKms(newMiles * 1.6);
                    }} />
                    <label htmlFor="kms">Kilometres</label>
                    <input type="number" id="kms" value={kms} onChange={(event) => {
                        const newKms = parseFloat(event.target.value);
                        setKms(newKms);
                        setMiles(newKms / 1.6);
                    }} />
                </div>
            </section>
        </>
    );
}

export default State;