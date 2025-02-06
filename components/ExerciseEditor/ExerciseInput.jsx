// self-defined components

import sanitizeInput from 'components/ExerciseEditor/utils/sanitizeInput';
import StyledTextInput from 'styles/StyledTextInput';
import ExerciseInputContainer from 'styles/ExerciseEditor/ExerciseInputContainer';
import ExerciseLabel from 'styles/ExerciseEditor/ExerciseLabel';

const ExerciseInput = ({ label, value, updateExercise, placeholder, keyboardType }) => {
  const onChange = (input) => {
    const sanitizedInput = sanitizeInput(input, keyboardType);
    updateExercise(sanitizedInput);
  };

  return (
    <ExerciseInputContainer>
      <ExerciseLabel>{label.toUpperCase()}:</ExerciseLabel>
      <StyledTextInput
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        value={value}
        keyboardType={keyboardType || 'default'}
      ></StyledTextInput>
    </ExerciseInputContainer>
  );
};

export default ExerciseInput;
