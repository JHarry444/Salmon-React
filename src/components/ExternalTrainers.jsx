import trainers from '../data/trainers.json';
import Trainer from './Trainer';
// import { v4 } from "uuid";

function ExternalTrainers() {
    return (
        <>
            <h2>External</h2>
            <div>
                {
                    trainers.map(({ id, name, age, specialism }) => (
                        <Trainer
                            key={id}
                            name={name}
                            age={age}
                            specialism={specialism}
                        />
                    )
                    )
                }
            </div>
        </>
    );
}

export default ExternalTrainers;