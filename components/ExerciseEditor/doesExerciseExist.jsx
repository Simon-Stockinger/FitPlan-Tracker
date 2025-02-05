export const doesExerciseExist = (trainingPlan, dayName, exerciseIndex) =>
  trainingPlan[dayName].length > exerciseIndex;
