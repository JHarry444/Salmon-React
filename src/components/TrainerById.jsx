import { useParams } from 'react-router';
import trainers from '../data/trainers.json';
import Trainer from './Trainer';
// import { v4 } from "uuid";

function TrainerById() {
    let { id } = useParams();

    const trainer = trainers.find(trainer => trainer.id === id);
    return (
        <>
            <h2>Trainer By Id</h2>
            <div>
                {
                    trainer ?
                        <Trainer name={trainer.name} age={trainer.age} specialism={trainer.specialism} />
                        :
                        <p>No trainer found with id: {id}</p>
                }
            </div>
        </>
    );
}

export default TrainerById;