import DynamicButton from './styled/DynamicButton';

const Exercise = ({ navigation, exerciseData, dayName, exerciseNumber }) => {
  return (
    <DynamicButton
      buttonSymbol={{ name: 'edit', size: 24 }}
      labelText={`${exerciseData.name || ''} - ${exerciseData.sets || 0} x ${
        exerciseData.reps || 0
      } - ${exerciseData.weight || 0}kg`}
      onPress={() => {
        navigation.navigate('Exercise Input', {
          dayName: dayName,
          exerciseNumber: exerciseNumber,
        });
      }}
    />
  );
};

export default Exercise;
