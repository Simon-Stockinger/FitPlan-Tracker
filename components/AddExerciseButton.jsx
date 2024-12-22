// 3rd party imports

import { Button, Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { BLANK_EXERCISE } from '../constants/globalConstants';

const AddExerciseButton = ({ navigation, dayName, exerciseNumber }) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <AddExerciseContainer
      onPressIn={() => setButtonPressed(true)}
      onPressOut={() => {
        setButtonPressed(false);
        navigation.navigate('Exercise Input', {
          dayName: dayName,
          exerciseNumber: exerciseNumber,
        });
      }}
      buttonPressed={buttonPressed}
    >
      <PlusSymbolView buttonPressed={buttonPressed}>
        <PlusSymbolText buttonPressed={buttonPressed}>+</PlusSymbolText>
      </PlusSymbolView>
      <LabelText buttonPressed={buttonPressed}>Add Exercise</LabelText>
    </AddExerciseContainer>
  );
};

const AddExerciseContainer = styled.Pressable`
  flex-direction: row;
  gap: 5%;
  border: 1px solid white;
  border-radius: 15px;
  padding: 5%;
  background-color: ${(props) => (props.buttonPressed ? '#ffffff' : '#000000')};
`;

const PlusSymbolView = styled(View)`
  background-color: ${(props) => (props.buttonPressed ? '#000000' : '#ffffff')};
  aspect-ratio: 1;
  min-width: 10%;
  border-radius: 50%;
  align-items: center; /* Center content horizontally */
  justify-content: center; /* Center content vertically */
`;

const AddExerciseText = styled(Text)`
  font-size: 20px;
`;

const LabelText = styled(AddExerciseText)`
  color: ${(props) => (props.buttonPressed ? '#000000' : '#ffffff')};
`;

const PlusSymbolText = styled(AddExerciseText)`
  color: ${(props) => (props.buttonPressed ? '#ffffff' : '#000000')};
  font-weight: 800;
  font-size: 26px;
  line-height: 30px;
`;

export default AddExerciseButton;
