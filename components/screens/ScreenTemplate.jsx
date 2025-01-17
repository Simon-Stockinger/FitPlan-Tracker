// 3rd party imports

import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

export default ScreenTemplate = ({ children }) => {
  return (
    <ScreenContainer>
      <ScrollView>
        {children}
        <StatusBar style="auto" />
      </ScrollView>
    </ScreenContainer>
  );
};

const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #000000;
  align-items: center;
  justify-content: center;
  padding: 5%;
`;
