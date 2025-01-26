// self defined components

import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

// 3rd party imports

import { styled } from 'styled-components';

import RecordedExercise from 'components/Workout/RecordedExercise';
import WorkoutContainer from 'components/styled/WorkoutContainer';

const { default: ScreenTemplate } = require('./ScreenTemplate');

const Workout = ({ navigation }) => {
  const { exercises, dayName } = useRoute().params;

  return (
    <ScreenTemplate>
      <WorkoutContainer>
        {exercises.map((exercise, index) => (
          <RecordedExercise exercise={exercise} key={index}></RecordedExercise>
        ))}
      </WorkoutContainer>
    </ScreenTemplate>
  );
};

export default Workout;
