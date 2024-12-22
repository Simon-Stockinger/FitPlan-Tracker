// 3rd party imports

import styled from 'styled-components';
import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';

// self defined components

import ExerciseEditor from './screens/ExerciseEditor';
import AddExerciseButton from './AddExerciseButton';
import TrainingPlanContext from './TrainingPlanContext';

import { useContext } from 'react';

const TrainingDay = ({ dayName, navigation }) => {
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);
  const exercises = trainingPlan[dayName] || [];

  return (
    <TrainingDayContainer>
      <TrainingDayHeadline>{dayName}</TrainingDayHeadline>
      <AddExerciseButton
        navigation={navigation}
        dayName={dayName}
        exerciseNumber={exercises.length + 1}
      />
    </TrainingDayContainer>
  );
};

const TrainingDayContainer = styled(View)`
  justify-content: center;
  width: 90%;
  border: 1px solid white;
  border-radius: 15px;
  margin: 5%;
  padding: 5%;
`;

const TrainingDayText = styled(Text)`
  color: #fff;
`;

const TrainingDayHeadline = styled(TrainingDayText)`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding: 5%;
`;

export default TrainingDay;
