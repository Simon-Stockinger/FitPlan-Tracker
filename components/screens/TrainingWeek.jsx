// Self defined components

import TrainingDay from 'components/TrainingDay';
import ScreenTemplate from 'components/screens/ScreenTemplate';

// Self defined constants

import { WEEK_DAYS } from 'constants/globalConstants';

// 3rd party imports

import styled from 'styled-components';
import { ScrollView } from 'react-native';

const TrainingWeek = ({ navigation }) => {
  const dayTrainingElements = WEEK_DAYS.map((weekDayName) => (
    <TrainingDay dayName={weekDayName} key={weekDayName} navigation={navigation} />
  ));

  return <ScreenTemplate>{dayTrainingElements}</ScreenTemplate>;
};

export default TrainingWeek;
