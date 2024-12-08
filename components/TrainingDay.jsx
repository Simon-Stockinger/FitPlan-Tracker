import styled from 'styled-components';

export default TrainingDay = ({ dayName }) => {
  return (
    <DayTraining>
      <DayTrainingText>{dayName}</DayTrainingText>
    </DayTraining>
  );
};

const DayTraining = styled.View`
  justify-content: center;
  width: 90%;
  border: 1px solid gray;
  border-radius: 3px;
  margin: 5%;
`;

const DayTrainingText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding: 5px;
`;
