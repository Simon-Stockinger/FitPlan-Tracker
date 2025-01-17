import leaveEditor from './leaveEditor';

const deleteExercise = (navigation, trainingPlan, setTrainingPlan, dayName, exerciseNumber) => {
  const exerciseExists = trainingPlan[dayName]?.[exerciseNumber] != null;

  if (!exerciseExists) {
    alert('Cannot delete exercise that is not even created yet!');
    return;
  } else {
    setTrainingPlan((prevTrainingPlan) => ({
      ...prevTrainingPlan,
      [dayName]: prevTrainingPlan[dayName].filter((exercise, index) => index !== exerciseNumber),
    }));
    leaveEditor(navigation);
  }
};

export default deleteExercise;
