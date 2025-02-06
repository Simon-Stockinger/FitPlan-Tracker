import { useCallback } from 'react';
import { useTrainingPlan } from 'components/TrainingPlanContext';
import applyExerciseUpdate from 'components/ExerciseEditor/utils/applyExerciseUpdate';
import handleDeleteExercise from 'components/ExerciseEditor/utils/applyExerciseDeletion';
import leaveEditor from 'components/ExerciseEditor/utils/leaveEditor';
import { useRoute } from '@react-navigation/native';
import applyExerciseDeletion from 'components/ExerciseEditor/utils/applyExerciseDeletion';

const useExerciseActions = (navigation) => {
  const [trainingPlan, setTrainingPlan] = useTrainingPlan();
  const { dayName, exerciseNumber } = useRoute().params;

  const updateCurrentExercise = useCallback(
    (exerciseFieldName, newValue) => {
      applyExerciseUpdate(setTrainingPlan, dayName, exerciseNumber, exerciseFieldName, newValue);
    },
    [setTrainingPlan, dayName, exerciseNumber]
  );

  const onDeleteButtonClick = useCallback(() => {
    applyExerciseDeletion(setTrainingPlan, dayName, exerciseNumber);
    leaveEditor(navigation);
  }, [navigation, setTrainingPlan, dayName, exerciseNumber]);

  return {
    trainingPlan,
    dayName,
    exerciseNumber,
    updateCurrentExercise,
    onDeleteButtonClick,
  };
};

export default useExerciseActions;
