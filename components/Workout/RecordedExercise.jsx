import Container from 'components/styled/Container';
import Headline from 'components/styled/Headline';
import SetInput from './SetInput';
import HorizontalSwipeList from './HorizontalSwipeList';

import { styled } from 'styled-components';
import { useContext } from 'react';

import TrainingPlanContext from 'components/TrainingPlanContext';
import { _Image } from 'react-native';
import initializeSetsArray from './initializeSetsArray';

const RecordedExercise = ({ dayName, exerciseNumber }) => {
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);
  const exerciseData = trainingPlan[dayName][exerciseNumber];

  const createSetInput = (setNumber, plannedReps, plannedWeight) => (
    <SetInput setNumber={setNumber} dayName={dayName} exerciseNumber={exerciseNumber} />
  );

  const setInputs = Array.from({ length: exerciseData.sets || 0 }, (_, index) =>
    createSetInput(index + 1, exerciseData.reps, exerciseData.weight)
  );

  initializeSetsArray(exerciseData, setTrainingPlan, dayName, exerciseNumber);

  return (
    <ExerciseContainer>
      <Headline>{exerciseData.name || ''}</Headline>
      <HorizontalSwipeList data={setInputs} />
    </ExerciseContainer>
  );
};

const ExerciseContainer = styled(Container)``;

export default RecordedExercise;
