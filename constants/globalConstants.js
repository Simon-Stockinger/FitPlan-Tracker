export const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const EMPTY_TRAINING_PLAN = WEEK_DAYS.reduce((acc, day) => {
  acc[day] = [];
  return acc;
}, {});

export const BLANK_EXERCISE = {
  name: null,
  sets: null,
  reps: null,
  weight: null,
};
