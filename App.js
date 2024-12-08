import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components';
import TrainingDay from './components/TrainingDay';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WEEK_DAYS } from './constants/globalConstants';

export default function App() {
  const dayTrainingElements = WEEK_DAYS.map((weekDayName) => (
    <TrainingDay dayName={weekDayName} key={weekDayName}></TrainingDay>
  ));

  return (
    <ScreenContainer>
      <WeeksScrollView>{dayTrainingElements}</WeeksScrollView>
      <StatusBar style="auto" />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
`;

const WeeksScrollView = styled.ScrollView`
  background-color: #000;
  flex-direction: column;
  padding: 5%;
`;
