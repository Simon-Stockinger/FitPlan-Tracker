// 3rd party imports

import { useEffect } from 'react';

const initializeSetsArray = (exerciseData, setTrainingPlan, dayName, exerciseNumber) => {
  useEffect(() => {
    if (!('performedSets' in exerciseData)) {
      setTrainingPlan((prevTrainingPlan) => ({
        ...prevTrainingPlan,
        [dayName]: prevTrainingPlan[dayName].map((exercise, index) =>
          index === exerciseNumber
            ? {
                ...exercise,
                performedSets: Array.from({ length: exercise.sets }, () => ({
                  performedReps: exercise.reps,
                  performedWeight: exercise.weight,
                })),
              }
            : exercise
        ),
      }));
    }
  }, []);
};

export default initializeSetsArray;
