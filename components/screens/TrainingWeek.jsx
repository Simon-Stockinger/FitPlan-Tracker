// Self defined components

import TrainingDay from '../TrainingDay';
import ScreenTemplate from './ScreenTemplate';

// Self defined constants

import { WEEK_DAYS } from '../../constants/globalConstants';

// 3rd party imports

import styled from 'styled-components';
import { ScrollView } from 'react-native';

const TrainingWeek = ({ navigation }) => {
  const dayTrainingElements = WEEK_DAYS.map((weekDayName) => (
    <TrainingDay dayName={weekDayName} key={weekDayName} navigation={navigation} />
  ));

  return (
    <ScreenTemplate>
      <WeeksScrollView>{dayTrainingElements}</WeeksScrollView>
    </ScreenTemplate>
  );
};

const WeeksScrollView = styled(ScrollView)`
  background-color: #000;
  flex-direction: column;
  padding: 5%;
`;

export default TrainingWeek;
