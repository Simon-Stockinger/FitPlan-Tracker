// self-defined components

import Container from 'components/styled/Container';
import Headline from 'components/styled/Headline';
import TrainingPlanContext from 'components/TrainingPlanContext';
import initializeSetsArray from 'components/Workout/initializeSetsArray';
import HorizontalSwipeList from 'components/Workout/HorizontalSwipeList';
import SetInput from 'components/Workout/SetInput';

// 3rd party imports

import { styled } from 'styled-components';
import { useContext } from 'react';
import { _Image } from 'react-native';

const RecordedExercise = ({ dayName, exerciseNumber }) => {
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);
  const exerciseData = trainingPlan[dayName][exerciseNumber];

  const createSetInput = (setIndex, plannedReps, plannedWeight) => (
    <SetInput setNumber={setIndex} dayName={dayName} exerciseNumber={exerciseNumber} />
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

const ExerciseContainer = styled(Container)`
  padding-top: 0%;
  margin: 5% 5% 0% 5%;
`;

export default RecordedExercise;
