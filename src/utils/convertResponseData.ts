import { Currency } from '../enums/currency';
import { RelativeKeyCourse } from '../enums/relativeKeyCourse';
import { RatesT } from '../types/RatesT';
import { StateCourseT } from '../types/StateCourseT';

import { getRelativeCourse } from './getRelativeCourse';

export const convertResponseData = (rates: RatesT): StateCourseT => ({
  ...rates,
  [RelativeKeyCourse.RUB_USD_KEY]: getRelativeCourse(
    rates[Currency.RUB],
    rates[Currency.USD],
  ),
  [RelativeKeyCourse.RUB_EUR_KEY]: getRelativeCourse(
    rates[Currency.RUB],
    rates[Currency.EUR],
  ),
  [RelativeKeyCourse.EUR_USD_KEY]: getRelativeCourse(
    rates[Currency.EUR],
    rates[Currency.USD],
  ),
});
