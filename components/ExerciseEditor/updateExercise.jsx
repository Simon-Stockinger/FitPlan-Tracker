import { BLANK_EXERCISE } from 'constants/BLANK_EXERCISE';

const updateExercise = (
  trainingPlan,
  setTrainingPlan,
  dayName,
  exerciseNumber,
  exerciseFieldName,
  newValue
) => {
  const exerciseAlreadyExists = trainingPlan[dayName].length > exerciseNumber;

  if (exerciseAlreadyExists) {
    setTrainingPlan((prevTrainingPlan) => ({
      ...prevTrainingPlan,
      [dayName]: prevTrainingPlan[dayName].map((exercise, index) =>
        index === exerciseNumber ? { ...exercise, [exerciseFieldName]: newValue } : exercise
      ),
    }));
  } else {
    setTrainingPlan((prevTrainingPlan) => ({
      ...prevTrainingPlan,
      [dayName]: [
        ...prevTrainingPlan[dayName],
        { ...BLANK_EXERCISE, [exerciseFieldName]: newValue },
      ],
    }));
  }
};

export default updateExercise;
