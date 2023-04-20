import { Currency } from 'enums/currency';
import { RelativeKeyCourse } from 'enums/relativeKeyCourse';
import { AllKeysT } from 'types/AllKeysT';

export const relativeKeysCourses: AllKeysT[] = [
  Currency.RUB,
  Currency.EUR,
  Currency.USD,
  RelativeKeyCourse.RUB_USD_KEY,
  RelativeKeyCourse.RUB_EUR_KEY,
  RelativeKeyCourse.EUR_USD_KEY,
];
