import { Currency } from '../enums/currency';

export type RatesT = {
  [key in Currency]: number;
};
