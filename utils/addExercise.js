import { BLANK_EXERCISE } from 'constants/BLANK_EXERCISE';

const addExercise = (setTrainingPlan, dayName) => {
  setTrainingPlan((prevTrainingPlan) => ({
    ...prevTrainingPlan,
    [dayName]: [...prevTrainingPlan[dayName], BLANK_EXERCISE],
  }));
};

export default addExercise;
