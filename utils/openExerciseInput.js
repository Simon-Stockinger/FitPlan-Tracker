const openExerciseInput = (navigation, dayName, exerciseNumber) => {
  navigation.navigate('Exercise Input', {
    dayName: dayName,
    exerciseNumber: exerciseNumber,
  });
};

export default openExerciseInput;
