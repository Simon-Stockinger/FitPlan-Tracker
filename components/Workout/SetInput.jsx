import ExerciseInput from 'components/ExerciseEditor/ExerciseInput';
import Container from 'components/styled/Container';
import Headline from 'components/styled/Headline';
import StyledTextInput from 'components/styled/StyledTextInput';
import TrainingPlanContext from 'components/TrainingPlanContext';
import { makeInt } from 'constants/globalConstants';
import { useContext } from 'react';

import { styled } from 'styled-components';

const SetInput = ({ setNumber, dayName, exerciseNumber }) => {
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);
  const exerciseData = trainingPlan[dayName][exerciseNumber];
  const plannedReps = exerciseData['reps'];

  const updatePerformedValue = (valueName, setNumber, newValue) => {
    const updatedExerciseData = {
      ...exerciseData,
      [valueName]: exerciseData[valueName].map((value, index) =>
        index === setNumber - 1 ? newValue : value
      ),
    };

    setTrainingPlan((prevTrainingPlan) => ({
      ...prevTrainingPlan,
      [dayName]: prevTrainingPlan[dayName].map((exercise, index) =>
        index === exerciseNumber ? updatedExerciseData : exercise
      ),
    }));
  };

  console.log(trainingPlan[dayName][exerciseNumber]['performedReps']);

  const onRepInput = (input) => {
    const sanitizedInput = makeInt(input);
    updatePerformedValue('performedReps', setNumber, sanitizedInput);
  };

  return (
    <SetInputContainer>
      <SmallHeadline>Set {setNumber}</SmallHeadline>
      <StyledTextInput
        placeholder={'Record reps performed'}
        value={plannedReps}
        keyboardType={'number-pad'}
        onChangeText={onRepInput}
        placeholderTextColor="#fff"
      />
    </SetInputContainer>
  );
};

const SmallHeadline = styled(Headline)`
  font-size: 20px;
`;

const SetInputContainer = styled(Container)`
  width: 90%;
`;

export default SetInput;
