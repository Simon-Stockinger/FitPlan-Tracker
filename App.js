// self defined components

import TrainingWeek from './components/screens/TrainingWeek';
import ExerciseEditor from './components/screens/ExerciseEditor';
import { TrainingPlanProvider } from './components/TrainingPlanContext';

// 3rd party imports

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SetupScreen from 'components/screens/SetupScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TrainingPlanProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Setup Screen" screenOptions={NavigatorStyles}>
          <Stack.Screen name="Setup Screen" component={SetupScreen} />
          <Stack.Screen name="Training Week" component={TrainingWeek} />
          <Stack.Screen name="Exercise Input" component={ExerciseEditor} />
        </Stack.Navigator>
      </NavigationContainer>
    </TrainingPlanProvider>
  );
}

const NavigatorStyles = {
  headerStyle: { backgroundColor: '#000000', borderBottomWidth: 2, borderBottomColor: '#FFF' },
  headerTintColor: '#FFF',
  headerTitleStyle: { fontWeight: 'bold' },
  headerLeftContainerStyle: { paddingLeft: 10 },
  headerRightContainerStyle: { paddingRight: 10 },
};
