// 3rd party imports

import styled from 'styled-components';
import { useContext } from 'react';

// self defined components

import AddExerciseButton from 'components/TrainingWeek/AddExerciseButton';
import TrainingPlanContext from 'components/TrainingPlanContext';
import PlannedExercise from 'components/TrainingWeek/PlannedExercise';
import DynamicButton from 'components/styled/DynamicButton';
import WorkoutContainer from 'components/styled/WorkoutContainer';
import Container from 'components/styled/Container';
import Headline from 'components/styled/Headline';

const TrainingDay = ({ dayName, navigation }) => {
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);
  const exercises = trainingPlan[dayName] || [];

  const startWorkout = () => {
    navigation.navigate('Workout', { exercises: exercises, dayName: dayName });
  };

  return (
    <TrainingDayContainer>
      <Headline>{dayName}</Headline>
      <WorkoutContainer>
        <Container>
          {exercises.map((exercise, index) => (
            <PlannedExercise
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
        </Container>
        {exercises.length > 0 && (
          <ButtonContainer>
            <DynamicButton
              labelText="Start workout"
              buttonSymbol={{ name: 'arrow-right', size: 34 }}
              onPress={startWorkout}
            />
          </ButtonContainer>
        )}
      </WorkoutContainer>
    </TrainingDayContainer>
  );
};

const TrainingDayContainer = styled(Container)`
  margin-bottom: 10%;
`;

const ButtonContainer = styled(Container)`
  border: none;
`;

export default TrainingDay;
