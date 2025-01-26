import ExerciseInput from 'components/ExerciseEditor/ExerciseInput';
import Container from 'components/styled/Container';
import Headline from 'components/styled/Headline';
import WhiteText from 'components/styled/WhiteText';

import { styled } from 'styled-components';

const SetInput = ({ setNumber, plannedReps, plannedWeight }) => {
  return (
    <SetInputContainer>
      <SmallHeadline>Set {setNumber}</SmallHeadline>
    </SetInputContainer>
  );
};

const SmallHeadline = styled(Headline)`
  font-size: 20px;
`;

const SetInputContainer = styled(Container)`
  width: 90%;
`;

export default SetInput;
