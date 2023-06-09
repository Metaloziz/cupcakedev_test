import { BASE_CURRENCY } from 'constants/baseCurrency';
import { AllKeysT } from 'types/AllKeysT';

export const addBaseCurrencyToTitle = (title: AllKeysT): string | AllKeysT => {
  if (title.toString().split('').includes('/')) return title;

  return `${title}/${BASE_CURRENCY}`;
};
