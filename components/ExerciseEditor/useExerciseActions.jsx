import { useCallback } from 'react';
import { useTrainingPlan } from 'components/TrainingPlanContext';
import updateExercise from 'components/ExerciseEditor/updateExercise';
import handleDeleteExercise from 'components/ExerciseEditor/deleteExercise';
import leaveEditor from 'components/ExerciseEditor/leaveEditor';
import { useRoute } from '@react-navigation/native';

const useExerciseActions = (navigation) => {
  const [trainingPlan, setTrainingPlan] = useTrainingPlan();
  const { dayName, exerciseNumber } = useRoute().params;

  const updateCurrentExercise = useCallback(
    (exerciseFieldName, newValue) => {
      updateExercise(setTrainingPlan, dayName, exerciseNumber, exerciseFieldName, newValue);
    },
    [setTrainingPlan, dayName, exerciseNumber]
  );

  const onDeleteButtonClick = useCallback(() => {
    handleDeleteExercise(navigation, trainingPlan, setTrainingPlan, dayName, exerciseNumber);
    leaveEditor(navigation);
  }, [navigation, trainingPlan, setTrainingPlan, dayName, exerciseNumber]);

  return {
    trainingPlan,
    dayName,
    exerciseNumber,
    updateCurrentExercise,
    onDeleteButtonClick,
  };
};

export default useExerciseActions;
