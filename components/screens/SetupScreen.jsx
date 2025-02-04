// 3rd party imports

import styled from 'styled-components';
import { CommonActions } from '@react-navigation/native';

// Self defined components

import ScreenTemplate from 'components/screens/ScreenTemplate';
import WhiteText from 'components/styled/WhiteText';
import DynamicButton from 'components/styled/DynamicButton';

const SetupScreen = ({ navigation }) => {
  const onPress = () => {
    navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Training Week' }] }));
  };

  return (
    <ScreenTemplate>
      <WelcomeHeadline>FitPlan-Tracker</WelcomeHeadline>
      <ExplanationText>
        As a first step to setup this app you need to provide some inputs.
      </ExplanationText>
      <ExplanationText>
        In the next screen you will be prompted to create the first week of your desired training
        plan.
      </ExplanationText>
      <ExplanationText>
        You need to choose on which days you want to have your exercise units, which exercises you
        want to do in which unit as well as the volume for each exercise.
      </ExplanationText>
      <DynamicButton
        labelText={'Start Setup'}
        buttonSymbol={{ name: 'arrow-right', size: 24 }}
        onPress={onPress}
      />
    </ScreenTemplate>
  );
};

const WelcomeHeadline = styled(WhiteText)`
  font-size: 32px;
  font-weight: bold;
  text-decoration-line: underline;
`;

const ExplanationText = styled(WhiteText)`
  font-size: 20px;
  padding: 5%;
`;

export default SetupScreen;
