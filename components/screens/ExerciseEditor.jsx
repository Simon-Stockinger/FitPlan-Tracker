// Self defined components

import ScreenTemplate from 'components/screens/ScreenTemplate';
import ExerciseInput from 'components/ExerciseEditor/ExerciseInput';
import DynamicButton from 'styles/DynamicButton';
import leaveEditor from 'components/ExerciseEditor/leaveEditor';
import ButtonContainer from 'styles/ExerciseEditor/ButtonContainer';
import useExerciseActions from 'components/ExerciseEditor/useExerciseActions';
import inputConfig from 'components/ExerciseEditor/inputConfig';

const ExerciseEditor = ({ navigation }) => {
  const { trainingPlan, dayName, exerciseNumber, updateCurrentExercise, onDeleteButtonClick } =
    useExerciseActions(navigation);

  return (
    <ScreenTemplate>
      {inputConfig.map(({ label, placeholder, keyboardType }) => (
        <ExerciseInput
          key={label}
          label={label}
          value={trainingPlan[dayName]?.[exerciseNumber]?.[label] ?? ''}
          updateExercise={(inputValue) => updateCurrentExercise(label, inputValue)}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      ))}
      <ButtonContainer>
        <DynamicButton
          buttonSymbol={{ name: 'trash-2', size: 24 }}
          labelText="Delete"
          onPress={onDeleteButtonClick}
        />
        <DynamicButton
          buttonSymbol={{ name: 'check-square', size: 24 }}
          labelText="Done"
          onPress={() => leaveEditor(navigation)}
        />
      </ButtonContainer>
    </ScreenTemplate>
  );
};

export default ExerciseEditor;
