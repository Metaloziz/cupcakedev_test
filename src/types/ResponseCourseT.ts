import { RatesT } from 'types/RatesT';

export type ResponseCourseT = {
  rates: RatesT;
  timestamp: number;
  base: string;
  date: string;
};
