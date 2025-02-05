import styled from 'styled-components';
import { View, TextInput } from 'react-native';

import WhiteText from 'styles/WhiteText';
import StyledTextInput from 'styles/StyledTextInput';
import sanitizeInput from 'components/ExerciseEditor/sanitizeInput';
import Container from 'styles/Container';

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

const ExerciseInputContainer = styled(Container)`
  min-width: 75%;
  margin: 0;
  margin-bottom: 5%;
`;

const ExerciseLabel = styled(WhiteText)`
  font-size: 20px;
  font-weight: bold;
  margin: 5%;
`;

export default ExerciseInput;
