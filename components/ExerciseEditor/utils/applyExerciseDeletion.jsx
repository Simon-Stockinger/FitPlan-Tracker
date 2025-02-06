const removeExerciseFromTrainingPlan = (trainingPlan, dayName, exerciseNumber) => ({
  ...trainingPlan,
  [dayName]: trainingPlan[dayName].filter((exercise, index) => index !== exerciseNumber),
});

const applyExerciseDeletion = (setTrainingPlan, dayName, exerciseNumber) =>
  setTrainingPlan((prevTrainingPlan) =>
    removeExerciseFromTrainingPlan(prevTrainingPlan, dayName, exerciseNumber)
  );

export default applyExerciseDeletion;
