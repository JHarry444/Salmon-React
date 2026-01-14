import axios from "axios";
import { useRef, useState } from "react";

function AddTrainer({ setTrainers }) {
    const [data, setData] = useState({
        name: "",
        age: 0,
        specialism: ""
    });

    const nameRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8080/trainers");

            setData({
                name: "",
                age: 0,
                specialism: ""
            });
            nameRef.current.focus();
            setTrainers(currentTrainers => [...currentTrainers, res.data])
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h2>Add Trainer</h2>
            <form onSubmit={handleSubmit}>
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
                <button>ADD</button>

            </form>
        </div>
    );
}

export default AddTrainer;