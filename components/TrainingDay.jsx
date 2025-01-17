// 3rd party imports

import styled from 'styled-components';
import { View, Text, TextInput } from 'react-native';
import { useContext } from 'react';

// self defined components

import AddExerciseButton from 'components/AddExerciseButton';
import TrainingPlanContext from 'components/TrainingPlanContext';
import WhiteText from 'components/styled/WhiteText';
import Exercise from './Exercise';

const TrainingDay = ({ dayName, navigation }) => {
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);
  const exercises = trainingPlan[dayName] || [];

  return (
    <TrainingDayContainer>
      <TrainingDayHeadline>{dayName}</TrainingDayHeadline>
      {exercises.map((exercise, index) => (
        <Exercise
          key={index}
          navigation={navigation}
          exerciseData={exercise}
          dayName={dayName}
          exerciseNumber={index + 1}
        />
      ))}
      <AddExerciseButton
        navigation={navigation}
        dayName={dayName}
        exerciseNumber={exercises.length + 1}
      />
    </TrainingDayContainer>
  );
};

const TrainingDayContainer = styled(View)`
  justify-content: center;
  width: 90%;
  border: 1px solid white;
  border-radius: 15px;
  margin: auto;
  padding: 5%;
`;

const TrainingDayHeadline = styled(WhiteText)`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding: 5%;
`;

export default TrainingDay;
