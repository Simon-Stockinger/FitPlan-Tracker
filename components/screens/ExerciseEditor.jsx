// 3rd party imports

import styled from 'styled-components';
import { TextInput, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useContext } from 'react';

// Self defined components

import ScreenTemplate from './ScreenTemplate';
import TrainingPlanContext from '../TrainingPlanContext';
import { BLANK_EXERCISE } from '../../constants/globalConstants';

const ExerciseEditor = () => {
  const { dayName, exerciseNumber } = useRoute().params;
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);

  const handleNameInput = (nameInput) => {
    console.log(trainingPlan);

    const exerciseAlreadyExists = trainingPlan[dayName].length === exerciseNumber;
    // const dayAlreadyHasExercise = trainingPlan.hasOwnProperty(dayName) && trainingPlan[dayName];
    // if (dayAlreadyHasExercise()) {
    //   updateExerciseName();
    // } else {
    //   createExerciseWithName();
    // }
    setTrainingPlan((prevTrainingPlan) => ({
      ...prevTrainingPlan,
      [dayName]: [...(prevTrainingPlan[dayName] || []), { ...BLANK_EXERCISE, name: nameInput }],
    }));
  };

  return (
    <ScreenTemplate>
      <ExerciseContainer>
        <ExerciseLabel>Exercise Name</ExerciseLabel>
        <ExerciseInputField
          onChangeText={handleNameInput}
          placeholder="Enter exercise name"
          placeholderTextColor="#fff"
        />
      </ExerciseContainer>
    </ScreenTemplate>
  );
};

const ExerciseContainer = styled(View)`
  margin: 5%;
  align-items: center;
  gap: 10%;
  width: 80%;
`;

const ExerciseInputField = styled.TextInput`
  color: white;
  font-size: 20px;
  min-width: 30%;
  border: 1px solid white;
  border-radius: 15px;
  padding: 5%;
`;

const ExerciseLabel = styled(Text)`
  color: white;
  font-size: 20px;
`;

export default ExerciseEditor;
