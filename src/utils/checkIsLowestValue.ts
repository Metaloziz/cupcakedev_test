export const checkIsLowestValue = (value: number, values: number[]): boolean =>
  value === Math.min(...values);
