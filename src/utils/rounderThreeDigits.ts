export const rounderThreeDigits = (value: number): number => {
  const thousandths = 1000;

  return Math.round(value * thousandths) / thousandths;
};
