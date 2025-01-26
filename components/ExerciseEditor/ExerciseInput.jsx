import styled from 'styled-components';
import { View, TextInput } from 'react-native';

import WhiteText from 'components/styled/WhiteText';
import { makeInt, makeNumeric } from 'constants/globalConstants';

const ExerciseInput = ({ label, value, updateExercise, placeholder, keyboardType }) => {
  const sanitizeInput = (input) => {
    switch (keyboardType) {
      case 'numeric':
        return makeNumeric(input);
      case 'number-pad':
        return makeInt(input);
      case 'default':
      default:
        return input;
    }
  };

  const onChange = (input) => {
    const sanitizedInput = sanitizeInput(input);
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

const StyledTextInput = styled(TextInput)`
  color: white;
  text-align: center;
  font-size: 20px;
  padding: 5%;
  border: 1px solid white;
  border-radius: 15px;
`;

const ExerciseInputContainer = styled(View)`
  border: 1px solid white;
  border-radius: 15px;
  margin-bottom: 5%;
  padding: 5%;
  min-width: 75%;
`;

const ExerciseLabel = styled(WhiteText)`
  font-size: 20px;
  font-weight: bold;
  margin: 5%;
`;

export default ExerciseInput;
