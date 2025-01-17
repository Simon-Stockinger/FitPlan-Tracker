import styled from 'styled-components';
import { View, TextInput } from 'react-native';

import WhiteText from 'components/styled/WhiteText';

const ExerciseInput = ({ label, value, updateExercise, placeholder, keyboardType }) => {
  const sanitizeInput = (input) => {
    switch (keyboardType) {
      case 'numeric':
        let sanitizedInput = input.replace(/[^0-9.]/g, ''); // Ensure there's only one decimal point
        const parts = sanitizedInput.split('.');
        if (parts.length > 2) {
          sanitizedInput = parts[0] + '.' + parts.slice(1).join('');
        }
        return sanitizedInput;
      case 'number-pad':
        return input.replace(/[^0-9]/g, '');
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
  margin: 5%;
  padding: 5%;
`;

const ExerciseLabel = styled(WhiteText)`
  font-size: 20px;
  font-weight: bold;
  margin: 5%;
  text-align: center;
`;

export default ExerciseInput;
