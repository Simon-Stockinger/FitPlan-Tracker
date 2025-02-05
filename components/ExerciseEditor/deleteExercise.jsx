// self-defined components

import { doesExerciseExist } from 'components/ExerciseEditor/doesExerciseExist';

const alertNonExistentExercise = () =>
  alert('Cannot delete exercise that is not even created yet!');

const removeExerciseFromTrainingPlan = (trainingPlan, dayName, exerciseNumber) => ({
  ...trainingPlan,
  [dayName]: trainingPlan[dayName].filter((exercise, index) => index !== exerciseNumber),
});

const applyExerciseDeletion = (setTrainingPlan, dayName, exerciseNumber) =>
  setTrainingPlan((prevTrainingPlan) =>
    removeExerciseFromTrainingPlan(prevTrainingPlan, dayName, exerciseNumber)
  );

const handleDeleteExercise = (
  navigation,
  trainingPlan,
  setTrainingPlan,
  dayName,
  exerciseNumber
) => {
  if (!doesExerciseExist(trainingPlan, dayName, exerciseNumber)) {
    alertNonExistentExercise();
    return;
  } else {
    applyExerciseDeletion(setTrainingPlan, dayName, exerciseNumber);
  }
};

export default handleDeleteExercise;
