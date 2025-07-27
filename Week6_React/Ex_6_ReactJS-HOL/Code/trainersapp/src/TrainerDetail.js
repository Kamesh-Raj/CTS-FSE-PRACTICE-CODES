import { useParams } from 'react-router-dom';
import trainersMock from './TrainersMock';

function TrainerDetail() {
  const { id } = useParams();
  const trainer = trainersMock.find(t => t.trainerId === id);

  if (!trainer) return <p>Trainer not found</p>;

  return (
    <>
      <h3>Trainers Details</h3>
      <h4>{trainer.name} ({trainer.technology})</h4>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>
      <ul>
        {trainer.skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </>
  );
}

export default TrainerDetail;
