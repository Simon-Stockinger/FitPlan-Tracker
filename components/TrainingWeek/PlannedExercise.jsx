import { displayExerciseData } from 'utils/displayExerciseData';
import DynamicButton from 'components/styled/DynamicButton';
import openExerciseInput from 'utils/openExerciseInput';

const PlannedExercise = ({ navigation, exerciseData, dayName, exerciseNumber }) => {
  return (
    <DynamicButton
      buttonSymbol={{ name: 'edit', size: 24 }}
      labelText={displayExerciseData(exerciseData)}
      onPress={() => openExerciseInput(navigation, dayName, exerciseNumber)}
    />
  );
};

export default PlannedExercise;
