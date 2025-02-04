export const displayExerciseData = (exerciseData) =>
  `${exerciseData.name || ''}\n${exerciseData.sets || 0} x ${exerciseData.reps || 0}\n${
    exerciseData.weight || 0
  }kg`;
