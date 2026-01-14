import axios from "axios";

export const addTrainer = async ({ e, setData, nameRef, setTrainers, data }) => {
    e.preventDefault();

    try {
        const res = await axios.post("http://localhost:8080/trainers", data);

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