export const checkIsLowestValue = (value: number, values: number[]) => {
  return value === Math.min(...values)
}
