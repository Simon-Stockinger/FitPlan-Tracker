import ExerciseInput from 'components/ExerciseEditor/ExerciseInput';
import Container from 'components/styled/Container';
import Headline from 'components/styled/Headline';
import StyledTextInput from 'components/styled/StyledTextInput';
import TrainingPlanContext from 'components/TrainingPlanContext';
import { makeInt } from 'constants/globalConstants';
import { useContext } from 'react';

import { styled } from 'styled-components';

const SetInput = ({ setNumber: setIndex, dayName, exerciseNumber }) => {
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);
  const exerciseData = trainingPlan[dayName][exerciseNumber];
  const plannedReps = exerciseData['reps'];

  const updatePerformedValue = (valueName, setNumber, newValue) => {
    const updatedExerciseData = {
      ...exerciseData,
      performedSets: exerciseData['performedSets'].map((value, index) =>
        index === setNumber - 1 ? { ...value, [valueName]: newValue } : value
      ),
    };

    setTrainingPlan((prevTrainingPlan) => ({
      ...prevTrainingPlan,
      [dayName]: prevTrainingPlan[dayName].map((exercise, index) =>
        index === exerciseNumber ? updatedExerciseData : exercise
      ),
    }));
  };

  const onRepInput = (input) => {
    const sanitizedInput = makeInt(input);
    updatePerformedValue('performedReps', setIndex, sanitizedInput);
  };

  return (
    <SetInputContainer>
      <SmallHeadline>Set {setIndex + 1}</SmallHeadline>
      <StyledTextInput
        placeholder={'Record reps performed'}
        value={exerciseData?.['performedSets']?.[setIndex - 1]?.['performedReps'] ?? plannedReps}
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
