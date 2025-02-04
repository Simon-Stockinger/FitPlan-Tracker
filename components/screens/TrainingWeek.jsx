// Self defined components

import TrainingDay from 'components/TrainingWeek/TrainingDay';
import ScreenTemplate from 'components/screens/ScreenTemplate';

// Self defined constants

import { WEEK_DAYS } from 'constants/WEEK_DAYS';

const TrainingWeek = ({ navigation }) => {
  const dayTrainingElements = WEEK_DAYS.map((weekDayName) => (
    <TrainingDay dayName={weekDayName} key={weekDayName} navigation={navigation} />
  ));

  return <ScreenTemplate>{dayTrainingElements}</ScreenTemplate>;
};

export default TrainingWeek;
