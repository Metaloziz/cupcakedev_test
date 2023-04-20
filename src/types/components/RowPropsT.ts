import { AllKeysT } from 'types/AllKeysT';
import { DefaultDivPropsT } from 'types/DefaultDivPropsT';

export type RowPropsT = {
  title: AllKeysT;
  values: number[];
} & DefaultDivPropsT;
