// 3rd party imports

import styled from 'styled-components';
import { View, Text } from 'react-native';

export default TrainingDay = ({ dayName }) => {
  return (
    <TrainingDayContainer>
      <TrainingDayName>{dayName}</TrainingDayName>
    </TrainingDayContainer>
  );
};

const TrainingDayContainer = styled.View`
  justify-content: center;
  width: 90%;
  border: 1px solid gray;
  border-radius: 3px;
  margin: 5%;
`;

const TrainingDayName = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding: 5px;
`;
