// self-defined components

import { useTrainingPlan } from 'components/TrainingPlanContext';
import DataInput from 'components/Workout/DataInput';
import { makeInt } from 'utils/makeInt';
import { makeNumeric } from 'utils/makeNumeric';
import DataInputContainer from 'styles/Workout/DataInputContainer';
import SetInputContainer from 'styles/Workout/SetInputContainer';
import SmallHeadline from 'styles/Workout/SmallHeadline';

// 3rd party imports

import { useContext } from 'react';

const SetInput = ({ setIndex, dayName, exerciseNumber }) => {
  const [trainingPlan, setTrainingPlan] = useTrainingPlan();
  const exerciseData = trainingPlan[dayName][exerciseNumber];
  const plannedReps = exerciseData['reps'];
  const plannedWeight = exerciseData['weight'];
  const performedSets = exerciseData?.['performedSets']?.[setIndex];

  const updatePerformedValue = (valueName, setIndex, newValue) => {
    const updatedExerciseData = {
      ...exerciseData,
      performedSets: exerciseData['performedSets'].map((value, index) =>
        index === setIndex ? { ...value, [valueName]: newValue } : value
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
      <SmallHeadline>Set {setIndex + 1}</SmallHeadline>
      <DataInputContainer>
        <DataInput
          dataName={'Reps'}
          value={performedSets?.['performedReps'] ?? plannedReps}
          keyboardType={'number-pad'}
          onChangeInput={onRepInput}
        />
        <DataInput
          dataName={'Weight'}
          value={performedSets?.['performedWeight'] ?? plannedWeight}
          keyboardType={'numeric'}
          onChangeInput={onWeightInput}
        />
      </DataInputContainer>
    </SetInputContainer>
  );
};

export default SetInput;
