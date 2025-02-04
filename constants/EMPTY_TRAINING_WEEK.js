import { WEEK_DAYS } from 'constants/WEEK_DAYS';

export const EMPTY_TRAINING_WEEK = WEEK_DAYS.reduce((acc, day) => {
  acc[day] = [];
  return acc;
}, {});
