import WhiteText from 'components/styled/WhiteText';
import { displayExerciseData } from 'constants/globalConstants';
import { styled } from 'styled-components';
import Container from 'components/styled/Container';
import Headline from 'components/styled/Headline';
import SetInput from './SetInput';
import HorizontalSwipeList from './HorizontalSwipeList';

const RecordedExercise = ({ exercise }) => {
  const createSetInput = (setNumber, plannedReps, plannedWeight) => (
    <SetInput setNumber={setNumber} plannedReps={plannedReps} plannedWeight={plannedWeight} />
  );

  const setInputs = Array.from({ length: exercise.sets || 0 }, (_, index) =>
    createSetInput(index + 1, exercise.reps, exercise.weight)
  );

  return (
    <ExerciseContainer>
      <Headline>{exercise.name || ''}</Headline>
      <HorizontalSwipeList data={setInputs} />
    </ExerciseContainer>
  );
};

const ExerciseContainer = styled(Container)``;

export default RecordedExercise;
