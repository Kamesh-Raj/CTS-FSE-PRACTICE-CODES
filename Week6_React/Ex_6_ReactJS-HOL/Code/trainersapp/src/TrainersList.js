import { Link } from 'react-router-dom';
import trainersMock from './TrainersMock';

function TrainersList() {
  return (
    <>
      <h3>Trainers List</h3>
      <ul>
        {trainersMock.map(trainer => (
          <li key={trainer.trainerId}>
            <Link to={`/trainers/${trainer.trainerId}`}>{trainer.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TrainersList;
