import { displayExerciseData } from 'utils/displayExerciseData';
import DynamicButton from 'components/styled/DynamicButton';

const PlannedExercise = ({ navigation, exerciseData, dayName, exerciseNumber }) => {
  return (
    <DynamicButton
      buttonSymbol={{ name: 'edit', size: 24 }}
      labelText={displayExerciseData(exerciseData)}
      onPress={() => {
        navigation.navigate('Exercise Input', {
          dayName: dayName,
          exerciseNumber: exerciseNumber,
        });
      }}
    />
  );
};

export default PlannedExercise;
