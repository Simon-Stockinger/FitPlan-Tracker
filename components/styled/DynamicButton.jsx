import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

const DynamicButton = ({ buttonSymbol, labelText, onPress }) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <ButtonContainer
      onPressIn={() => setButtonPressed(true)}
      onPressOut={() => setButtonPressed(false)}
      onPress={onPress}
      buttonPressed={buttonPressed}
    >
      {buttonSymbol && (
        <SymbolView buttonPressed={buttonPressed}>
          {
            <StyledIcon
              name={buttonSymbol.name}
              size={buttonSymbol.size}
              color={buttonPressed ? 'white' : 'black'}
            />
          }
        </SymbolView>
      )}
      {labelText && <LabelText buttonPressed={buttonPressed}>{labelText}</LabelText>}
    </ButtonContainer>
  );
};

const ButtonContainer = styled(Pressable)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 15px;
  background-color: ${(props) => (props.buttonPressed ? '#ffffff' : '#000000')};
`;

const SymbolView = styled(View)`
  background-color: ${(props) => (props.buttonPressed ? '#000000' : '#ffffff')};
  min-width: 10%;
  border-radius: 15px;
  align-items: center; /* Center content horizontally */
  justify-content: center; /* Center content vertically */
  margin-left: 5%;
`;

const StyledIcon = styled(Icon)`
  padding: 2%;
`;

const ButtonText = styled(Text)`
  font-size: 20px;
`;

const LabelText = styled(ButtonText)`
  color: ${(props) => (props.buttonPressed ? '#000000' : '#ffffff')};
  padding: 5%;
  flex-shrink: 1;
  flex-grow: 1;
`;

export default DynamicButton;
