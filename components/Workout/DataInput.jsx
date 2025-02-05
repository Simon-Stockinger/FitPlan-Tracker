// self-defined components

import StyledTextInput from 'styles/StyledTextInput';
import InputContainer from 'styles/Workout/InputContainer';
import InputLabel from 'styles/Workout/InputLabel';

// 3rd party imports

const DataInput = ({ dataName, value, keyboardType, onChangeInput }) => {
  return (
    <InputContainer>
      <InputLabel>{dataName.toUpperCase()}</InputLabel>
      <StyledTextInput
        placeholder={`Record ${dataName} performed`}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeInput}
      />
    </InputContainer>
  );
};

export default DataInput;
