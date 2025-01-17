// Self defined components

import ScreenTemplate from 'components/screens/ScreenTemplate';
import ExerciseInput from 'components/ExerciseEditor/ExerciseInput';
import TrainingPlanContext from 'components/TrainingPlanContext';

import { useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components';
import DynamicButton from 'components/styled/DynamicButton';
import updateExercise from 'components/ExerciseEditor/updateExercise';
import leaveEditor from 'components/ExerciseEditor/leaveEditor';
import deleteExercise from 'components/ExerciseEditor/deleteExercise';

const ExerciseEditor = ({ navigation }) => {
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);
  const { dayName, exerciseNumber } = useRoute().params;

  console.log(trainingPlan);

  const updateCurrentExercise = (exerciseFieldName, newValue) =>
    updateExercise(
      trainingPlan,
      setTrainingPlan,
      dayName,
      exerciseNumber,
      exerciseFieldName,
      newValue
    );

  return (
    <ScreenTemplate>
      <ExerciseInput
        label={'name'}
        value={trainingPlan[dayName]?.[exerciseNumber]?.['name'] ?? ''}
        updateExercise={(inputValue) => updateCurrentExercise('name', inputValue)}
        placeholder="Enter exercise name"
        keyboardType="default"
      />
      <ExerciseInput
        label={'sets'}
        value={trainingPlan[dayName]?.[exerciseNumber]?.['sets'] ?? ''}
        updateExercise={(inputValue) => updateCurrentExercise('sets', inputValue)}
        placeholder="Enter number of sets"
        keyboardType="number-pad"
      />
      <ExerciseInput
        label={'reps'}
        value={trainingPlan[dayName]?.[exerciseNumber]?.['reps'] ?? ''}
        updateExercise={(inputValue) => updateCurrentExercise('reps', inputValue)}
        placeholder="Enter number of reps"
        keyboardType="number-pad"
      />
      <ExerciseInput
        label={'weight'}
        value={trainingPlan[dayName]?.[exerciseNumber]?.['weight'] ?? ''}
        updateExercise={(inputValue) => updateCurrentExercise('weight', inputValue)}
        placeholder="Enter weight"
        keyboardType="numeric"
      />
      <DynamicButton
        buttonSymbol={{ name: 'check-square', size: 24 }}
        labelText="Done"
        onPress={() => leaveEditor(navigation)}
      />
      <DynamicButton
        buttonSymbol={{ name: 'trash', size: 24 }}
        labelText="Delete Exercise"
        onPress={() =>
          deleteExercise(navigation, trainingPlan, setTrainingPlan, dayName, exerciseNumber)
        }
      />
    </ScreenTemplate>
  );
};

export default ExerciseEditor;
