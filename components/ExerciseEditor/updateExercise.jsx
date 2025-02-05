const updateExercise = (setTrainingPlan, dayName, exerciseNumber, exerciseFieldName, newValue) => {
  setTrainingPlan((prevTrainingPlan) => ({
    ...prevTrainingPlan,
    [dayName]: prevTrainingPlan[dayName].map((exercise, index) =>
      index === exerciseNumber ? { ...exercise, [exerciseFieldName]: newValue } : exercise
    ),
  }));
};

export default updateExercise;
