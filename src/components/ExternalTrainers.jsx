import { useNavigate } from 'react-router';
import trainers from '../data/trainers.json';
import Trainer from './Trainer';
// import { v4 } from "uuid";

function ExternalTrainers() {
    const navigate = useNavigate();
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
                            onClick={() => navigate(`/external/${id}`)}
                        />
                    )
                    )
                }
            </div>
        </>
    );
}

export default ExternalTrainers;