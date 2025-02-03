import ExerciseInput from 'components/ExerciseEditor/ExerciseInput';
import Container from 'components/styled/Container';
import Headline from 'components/styled/Headline';
import StyledTextInput from 'components/styled/StyledTextInput';
import WhiteText from 'components/styled/WhiteText';
import TrainingPlanContext from 'components/TrainingPlanContext';
import { makeInt, makeNumeric } from 'constants/globalConstants';
import { useContext } from 'react';

import { styled } from 'styled-components';

const SetInput = ({ setNumber: setIndex, dayName, exerciseNumber }) => {
  const [trainingPlan, setTrainingPlan] = useContext(TrainingPlanContext);
  const exerciseData = trainingPlan[dayName][exerciseNumber];
  const plannedReps = exerciseData['reps'];
  const plannedWeight = exerciseData['weight'];
  const performedSets = exerciseData?.['performedSets']?.[setIndex - 1];

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

  const onWeightInput = (input) => {
    const sanitizedInput = makeNumeric(input);
    updatePerformedValue('performedWeight', setIndex, sanitizedInput);
  };

  return (
    <SetInputContainer>
      <SmallHeadline>Set {setIndex}</SmallHeadline>
      <BottomContainer>
        <InputContainer>
          <InputLabel>Reps</InputLabel>
          <StyledTextInput
            placeholder={'Record reps performed'}
            value={performedSets?.['performedReps'] ?? plannedReps}
            keyboardType={'number-pad'}
            onChangeText={onRepInput}
            placeholderTextColor="#fff"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Weight</InputLabel>
          <StyledTextInput
            placeholder={'Record weight performed'}
            value={performedSets?.['performedWeight'] ?? plannedWeight}
            keyboardType={'numeric'}
            onChangeText={onWeightInput}
            placeholderTextColor="#fff"
          />
        </InputContainer>
      </BottomContainer>
    </SetInputContainer>
  );
};

const SmallHeadline = styled(Headline)`
  font-size: 22px;
  padding: 0;
`;

const BottomContainer = styled(Container)`
  flex: 1;
  flex-direction: row;
  border: none;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 0;
`;

const InputContainer = styled(Container)`
  flex: 1;
  flex-direction: column;
  border: none;
`;

const InputLabel = styled(WhiteText)`
  font-size: 18px;
  margin-bottom: 5%;
`;

const SetInputContainer = styled(Container)`
  width: 90%;
`;

export default SetInput;
