// self-defined components

import DynamicButton from 'styles/DynamicButton';
import leaveEditor from 'components/ExerciseEditor/utils/leaveEditor';
import ButtonContainer from 'styles/ExerciseEditor/ButtonContainer';
import useExerciseActions from 'components/ExerciseEditor/utils/useExerciseActions';

// 3rd party imports

import { useNavigation } from '@react-navigation/native';

const EditorButtons = () => {
  const navigation = useNavigation();
  const { onDeleteButtonClick } = useExerciseActions(navigation);

  return (
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
  );
};

export default EditorButtons;
