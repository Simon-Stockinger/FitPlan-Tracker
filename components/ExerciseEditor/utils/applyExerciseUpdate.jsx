const applyExerciseUpdate = (
  setTrainingPlan,
  dayName,
  exerciseNumber,
  exerciseFieldName,
  newValue
) => {
  setTrainingPlan((prevTrainingPlan) =>
    updateExerciseInTrainingPlan(
      prevTrainingPlan,
      dayName,
      exerciseNumber,
      exerciseFieldName,
      newValue
    )
  );
};

const updateExerciseInTrainingPlan = (
  trainingPlan,
  dayName,
  exerciseNumber,
  exerciseFieldName,
  newValue
) => ({
  ...trainingPlan,
  [dayName]: trainingPlan[dayName].map((exercise, index) =>
    index === exerciseNumber ? { ...exercise, [exerciseFieldName]: newValue } : exercise
  ),
});

export default applyExerciseUpdate;
