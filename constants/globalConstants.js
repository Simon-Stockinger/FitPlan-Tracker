export const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const EMPTY_TRAINING_WEEK = WEEK_DAYS.reduce((acc, day) => {
  acc[day] = [];
  return acc;
}, {});

export const BLANK_EXERCISE = {
  name: null,
  sets: null,
  reps: null,
  weight: null,
};

export const displayExerciseData = (exerciseData) =>
  `${exerciseData.name || ''}\n${exerciseData.sets || 0} x ${exerciseData.reps || 0}\n${
    exerciseData.weight || 0
  }kg`;

export const makeNumeric = (input) => {
  let sanitizedInput = input.replace(/[^0-9.]/g, ''); // Ensure there's only one decimal point
  const parts = sanitizedInput.split('.');
  if (parts.length > 2) {
    sanitizedInput = parts[0] + '.' + parts.slice(1).join('');
  }
  return sanitizedInput;
};

export const makeInt = (input) => input.replace(/[^0-9]/g, '');
