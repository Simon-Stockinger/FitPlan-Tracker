import { useEffect } from 'react';

const initializeSetsArray = (exerciseData, setTrainingPlan, dayName, exerciseNumber) => {
  useEffect(() => {
    if (!'performedReps' in exerciseData) {
      setTrainingPlan((prevTrainingPlan) => ({
        ...prevTrainingPlan,
        [dayName]: prevTrainingPlan[dayName].map((exercise, index) =>
          index === exerciseNumber
            ? {
                ...exercise,
                performedReps: Array.from({ length: exercise.sets }, () => exercise.reps),
              }
            : exercise
        ),
      }));
    }
  }, []);
};

export default initializeSetsArray;
