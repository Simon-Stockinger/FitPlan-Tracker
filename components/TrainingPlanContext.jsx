// 3rd party imports

import React, { createContext, useState } from 'react';

// global constants

import { EMPTY_TRAINING_WEEK } from 'constants/EMPTY_TRAINING_WEEK';

const TrainingPlanContext = createContext();

export const TrainingPlanProvider = ({ children }) => {
  const [trainingPlan, setTrainingPlan] = useState(EMPTY_TRAINING_WEEK);

  return (
    <TrainingPlanContext.Provider value={[trainingPlan, setTrainingPlan]}>
      {children}
    </TrainingPlanContext.Provider>
  );
};

export default TrainingPlanContext;
