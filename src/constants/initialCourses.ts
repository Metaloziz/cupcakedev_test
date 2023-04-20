import { DEFAULT_COURSE } from './defaultCourse';

import { Currency } from 'enums/currency';
import { RelativeKeyCourse } from 'enums/relativeKeyCourse';
import { StateCourseT } from 'types/StateCourseT';

export const initialCourses: StateCourseT = {
  [Currency.RUB]: DEFAULT_COURSE,
  [Currency.EUR]: DEFAULT_COURSE,
  [Currency.USD]: DEFAULT_COURSE,
  [RelativeKeyCourse.RUB_USD_KEY]: DEFAULT_COURSE,
  [RelativeKeyCourse.RUB_EUR_KEY]: DEFAULT_COURSE,
  [RelativeKeyCourse.EUR_USD_KEY]: DEFAULT_COURSE,
};
