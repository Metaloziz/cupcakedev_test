import { RatesMapT } from 'types/RatesMapT';

export const checkIsLowestValue = (value: number, values: RatesMapT[]): boolean => {
  const allNumbers = values.map(element => element.value);

  return value === Math.min(...allNumbers);
};
