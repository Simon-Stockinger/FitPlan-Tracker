// 3rd party imports

import { styled } from 'styled-components';
import { TextInput } from 'react-native';

const StyledTextInput = styled(TextInput)`
  flex: 1;
  color: white;
  text-align: center;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 15px;
`;

StyledTextInput.defaultProps = {
  placeholderTextColor: '#fff',
};

export default StyledTextInput;
