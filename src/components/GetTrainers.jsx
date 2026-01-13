import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Trainer from "./Trainer";

function GetTrainers() {
    const navigate = useNavigate();

    const [trainers, setTrainers] = useState([]);
    const [filter, setFilter] = useState("");

    const fetchTrainers = async function () {
        try {
            const res = await fetch("http://localhost:8080/trainers");
            const json = await res.json();
            setTrainers(json);
        } catch (err) {
            console.error(err)
        }
    }
    //  onLoad (componentDidMount) AND onDelete (componentWillUnmount)
    useEffect(function () {
        fetchTrainers();

        const trainerInterval = setInterval(fetchTrainers, 5_000);

        return () => clearInterval(trainerInterval);
    }, []);

    // //  onUpdate (componentDidUpdate)
    // useEffect(function () {
    //     fetch("http://localhost:8080/trainers")
    //         .then(res => res.json())
    //         .then(json => setTrainers(json))
    //         .catch(err => console.error(err));
    // }, []);


    return (
        <>
            <h2>External</h2>
            <label htmlFor="filter">Filter</label>
            <input type="text" name="filter" id="filter" value={filter} onChange={e => setFilter(e.target.value)} />
            <div>
                {
                    trainers
                        .filter(trainer => trainer.name.toLowerCase().startsWith(filter.toLowerCase()))
                        .map(({ id, name, age, specialism }) => (
                            <Trainer
                                key={id}
                                name={name}
                                age={age}
                                specialism={specialism}
                                onClick={() => navigate(`/external/${id}`)}
                            />
                        )
                        )
                }
            </div>
            <p>{new Date().toISOString()}</p>
        </>
    );
}

export default GetTrainers;