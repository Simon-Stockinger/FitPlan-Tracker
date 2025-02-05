// 3rd party imports

import { useContext } from 'react';

// self defined components

import TrainingPlanContext from 'components/TrainingPlanContext';
import PlannedExercise from 'components/TrainingWeek/PlannedExercise';
import openExerciseInput from 'utils/openExerciseInput';
import TrainingDayContainer from 'styles/TrainingWeek/TrainingDayContainer';
import ButtonContainer from 'styles/TrainingWeek/ButtonContainer';
import DynamicButton from 'styles/DynamicButton';
import WorkoutContainer from 'styles/Workout/WorkoutContainer';
import Container from 'styles/Container';
import Headline from 'styles/Headline';
import addExercise from 'utils/addExercise';

const TrainingDay = ({ dayName, navigation }) => {
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);
  const exercises = trainingPlan[dayName] || [];

  const startWorkout = () => {
    navigation.navigate('Workout', { exercises: exercises, dayName: dayName });
  };

  const addExerciseAndOpen = () => {
    addExercise(setTrainingPlan, dayName);
    openExerciseInput(navigation, dayName, exercises.length);
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
          <DynamicButton
            labelText={'Add Exercise'}
            onPress={addExerciseAndOpen}
            buttonSymbol={{ name: 'plus', size: 24 }}
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

export default TrainingDay;
