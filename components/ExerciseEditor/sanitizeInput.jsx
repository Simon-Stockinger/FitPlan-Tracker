// self-defined components

import { makeInt } from 'utils/makeInt';
import { makeNumeric } from 'utils/makeNumeric';

const sanitizeInput = (input, keyboardType) => {
  switch (keyboardType) {
    case 'numeric':
      return makeNumeric(input);
    case 'number-pad':
      return makeInt(input);
    case 'default':
    default:
      return input;
  }
};

export default sanitizeInput;
