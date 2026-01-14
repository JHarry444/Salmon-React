import { useState } from "react";
import AddTrainer from "./AddTrainer";
import GetTrainers from "./GetTrainers";

function Effect() {
     const [trainers, setTrainers] = useState([]);
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            columnGap: "10px"
        }}>
            <AddTrainer setTrainers={setTrainers} />
            <GetTrainers trainers={trainers} setTrainers={setTrainers} />
        </div>
    );
}

export default Effect;