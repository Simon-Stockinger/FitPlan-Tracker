// 3rd party imports

import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default ScreenTemplate = ({ children }) => {
  return (
    <ScreenContainer>
      {children}
      <StatusBar style="auto" />
    </ScreenContainer>
  );
};

const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
`;
