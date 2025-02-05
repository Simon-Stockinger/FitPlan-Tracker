// self-defined components

import Container from 'styles/Container';
import Headline from 'styles/Headline';
import { useTrainingPlan } from 'components/TrainingPlanContext';
import initializeSetsArray from 'components/Workout/initializeSetsArray';
import HorizontalSwipeList from 'components/Workout/HorizontalSwipeList';
import SetInput from 'components/Workout/SetInput';
import ExerciseContainer from 'styles/Workout/ExerciseContainer';

// 3rd party imports

import { styled } from 'styled-components';
import { useContext } from 'react';
import { _Image } from 'react-native';

const RecordedExercise = ({ dayName, exerciseNumber }) => {
  const [trainingPlan, setTrainingPlan] = useTrainingPlan();
  const exerciseData = trainingPlan[dayName][exerciseNumber];

  const createSetInput = (setIndex) => (
    <SetInput setIndex={setIndex} dayName={dayName} exerciseNumber={exerciseNumber} />
  );

  const setInputs = Array.from({ length: exerciseData.sets || 0 }, (_, index) =>
    createSetInput(index, exerciseData.reps, exerciseData.weight)
  );

  initializeSetsArray(exerciseData, setTrainingPlan, dayName, exerciseNumber);

  return (
    <ExerciseContainer>
      <Headline>{exerciseData.name || ''}</Headline>
      <HorizontalSwipeList data={setInputs} />
    </ExerciseContainer>
  );
};

export default RecordedExercise;
