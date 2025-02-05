// Self defined components

import ScreenTemplate from 'components/screens/ScreenTemplate';
import ExerciseInput from 'components/ExerciseEditor/ExerciseInput';
import TrainingPlanContext from 'components/TrainingPlanContext';
import DynamicButton from 'styles/DynamicButton';
import updateExercise from 'components/ExerciseEditor/updateExercise';
import leaveEditor from 'components/ExerciseEditor/leaveEditor';
import applyExerciseDeletion from 'components/ExerciseEditor/deleteExercise';
import ButtonContainer from 'styles/ExerciseEditor/ButtonContainer';

// 3rd party imports

import { useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import handleDeleteExercise from 'components/ExerciseEditor/deleteExercise';

const ExerciseEditor = ({ navigation }) => {
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);
  const { dayName, exerciseNumber } = useRoute().params;

  const updateCurrentExercise = (exerciseFieldName, newValue) =>
    updateExercise(
      trainingPlan,
      setTrainingPlan,
      dayName,
      exerciseNumber,
      exerciseFieldName,
      newValue
    );

  const onDeleteButtonClick = () => {
    handleDeleteExercise(navigation, trainingPlan, setTrainingPlan, dayName, exerciseNumber);
    leaveEditor(navigation);
  };

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
      <ButtonContainer>
        <DynamicButton
          buttonSymbol={{ name: 'trash-2', size: 24 }}
          labelText="Delete"
          onPress={onDeleteButtonClick}
        />
        <DynamicButton
          buttonSymbol={{ name: 'check-square', size: 24 }}
          labelText="Done"
          onPress={() => leaveEditor(navigation)}
        />
      </ButtonContainer>
    </ScreenTemplate>
  );
};

export default ExerciseEditor;
