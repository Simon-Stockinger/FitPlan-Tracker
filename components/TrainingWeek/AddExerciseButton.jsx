// Self defined components

import DynamicButton from 'components/styled/DynamicButton';

const AddExerciseButton = ({ navigation, dayName, exerciseNumber }) => {
  const onPress = () => {
    navigation.navigate('Exercise Input', {
      dayName: dayName,
      exerciseNumber: exerciseNumber,
    });
  };

  return (
    <DynamicButton
      labelText={'Add Exercise'}
      onPress={onPress}
      buttonSymbol={{ name: 'plus', size: 24 }}
    />
  );
};

export default AddExerciseButton;
