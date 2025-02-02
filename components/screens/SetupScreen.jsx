// 3rd party imports

import styled from 'styled-components';

// Self defined components

import ScreenTemplate from './ScreenTemplate';
import WhiteText from 'components/styled/WhiteText';
import StartSetupButton from 'components/StartSetupButton';

const SetupScreen = ({ navigation }) => {
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
      <StartSetupButton navigation={navigation} />
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
