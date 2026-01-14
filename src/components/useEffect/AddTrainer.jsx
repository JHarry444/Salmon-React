import axios from "axios";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context/context";
import { addTrainer } from "./eventHandlers";

function AddTrainer({ setTrainers }) {

    const { theme } = useContext(ThemeContext);

    const [data, setData] = useState({
        name: "",
        age: 0,
        specialism: ""
    });

    const nameRef = useRef(null);



    return (
        <div>
            <h2>Add Trainer</h2>
            <form onSubmit={(e) => addTrainer({ e, setData, nameRef, setTrainers, data })}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: "1fr 3fr",
                    gap: "5px"
                }}>
                    <label htmlFor="trainerName">Name</label>
                    <input type="text" name="name" id="trainerName" ref={nameRef}
                        value={data.name} onChange={e => setData(currentData => ({ ...currentData, name: e.target.value }))} />

                    <label htmlFor="trainerAge">Age</label>
                    <input type="number" name="age" id="trainerAge"
                        value={data.age} onChange={e => setData({ ...data, age: e.target.value })} />

                    <label htmlFor="trainerSpecialism">Specialism</label>
                    <input type="text" name="specialism" id="trainerSpecialism"
                        value={data.specialism} onChange={e => setData({ ...data, specialism: e.target.value })} />

                </div>
                <button className={theme}>ADD</button>

            </form>
        </div>
    );
}

export default AddTrainer;