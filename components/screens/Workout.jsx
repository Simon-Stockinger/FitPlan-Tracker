// self defined components

import RecordedExercise from 'components/Workout/RecordedExercise';
import WorkoutContainer from 'components/styled/WorkoutContainer';
import ScreenTemplate from './ScreenTemplate';

// 3rd party imports

import { useRoute } from '@react-navigation/native';

const Workout = ({ navigation }) => {
  const { exercises, dayName } = useRoute().params;

  return (
    <ScreenTemplate>
      <WorkoutContainer>
        {exercises.map((exercise, index) => (
          <RecordedExercise dayName={dayName} exerciseNumber={index} key={index}></RecordedExercise>
        ))}
      </WorkoutContainer>
    </ScreenTemplate>
  );
};

export default Workout;
