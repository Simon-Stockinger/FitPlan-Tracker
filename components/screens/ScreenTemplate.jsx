// 3rd party imports

import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

// self-defined components

import ScreenContainer from 'styles/ScreenContainer';

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
