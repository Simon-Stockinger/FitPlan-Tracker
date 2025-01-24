// 3rd party imports

import styled from 'styled-components';
import { View, Text, TextInput } from 'react-native';
import { useContext } from 'react';

// self defined components

import AddExerciseButton from 'components/AddExerciseButton';
import TrainingPlanContext from 'components/TrainingPlanContext';
import WhiteText from 'components/styled/WhiteText';
import Exercise from './Exercise';
import DynamicButton from './styled/DynamicButton';

const TrainingDay = ({ dayName, navigation }) => {
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);
  const exercises = trainingPlan[dayName] || [];

  return (
    <TrainingDayContainer>
      <TrainingDayHeadline>{dayName}</TrainingDayHeadline>
      <WorkoutContainer>
        <ExercisesContainer>
          {exercises.map((exercise, index) => (
            <Exercise
              key={index}
              navigation={navigation}
              exerciseData={exercise}
              dayName={dayName}
              exerciseNumber={index}
            />
          ))}
          <AddExerciseButton
            navigation={navigation}
            dayName={dayName}
            exerciseNumber={exercises.length}
          />
        </ExercisesContainer>
        {exercises.length > 0 && (
          <ButtonContainer>
            <DynamicButton
              labelText="Start workout"
              buttonSymbol={{ name: 'arrow-right', size: 34 }}
            />
          </ButtonContainer>
        )}
      </WorkoutContainer>
    </TrainingDayContainer>
  );
};

const TrainingDayContainer = styled(View)`
  flex: 1;
  align-items: center;
  margin: auto;
  padding: 5%;
  border: 1px solid white;
  border-radius: 15px;
  margin-bottom: 10%;
`;

const WorkoutContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  gap: 5%;
  margin: auto;
  align-items: center;
`;

const ExercisesContainer = styled(View)`
  flex: 1;
  justify-content: center;
  border: 1px solid white;
  border-radius: 15px;
  margin: auto;
  padding: 5%;
`;

const ButtonContainer = styled(View)`
  flex: 1;
`;

const TrainingDayHeadline = styled(WhiteText)`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding: 5%;
`;

export default TrainingDay;
