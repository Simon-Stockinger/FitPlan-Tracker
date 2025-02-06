// Self defined components

import ScreenTemplate from 'components/screens/ScreenTemplate';
import ExerciseInput from 'components/ExerciseEditor/ExerciseInput';
import useExerciseActions from 'components/ExerciseEditor/utils/useExerciseActions';
import inputConfig from 'components/ExerciseEditor/inputConfig';
import EditorButtons from 'components/ExerciseEditor/EditorButtons';

const ExerciseEditor = ({ navigation }) => {
  const { trainingPlan, dayName, exerciseNumber, updateCurrentExercise } =
    useExerciseActions(navigation);

  const makeExerciseInput = ({ label, placeholder, keyboardType }) => (
    <ExerciseInput
      key={label}
      label={label}
      value={trainingPlan[dayName]?.[exerciseNumber]?.[label] ?? ''}
      updateExercise={(inputValue) => updateCurrentExercise(label, inputValue)}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );

  const exerciseInputs = inputConfig.map(makeExerciseInput);

  return (
    <ScreenTemplate>
      {exerciseInputs}
      <EditorButtons />
    </ScreenTemplate>
  );
};

export default ExerciseEditor;
