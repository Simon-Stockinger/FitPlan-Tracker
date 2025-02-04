// 3rd party imports

import { CommonActions } from '@react-navigation/native';

// self-defined components

import DynamicButton from 'components/styled/DynamicButton';

const StartSetupButton = ({ navigation }) => {
  const onPress = () => {
    navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Training Week' }] }));
  };

  return (
    <DynamicButton
      labelText={'Start Setup'}
      buttonSymbol={{ name: 'arrow-right', size: 24 }}
      onPress={onPress}
    />
  );
};

export default StartSetupButton;
