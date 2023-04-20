import { AllKeysT } from 'types/AllKeysT';
import { DefaultDivPropsT } from 'types/DefaultDivPropsT';
import { RatesMapT } from 'types/RatesMapT';

export type RowPropsT = {
  title: AllKeysT;
  values: RatesMapT[];
} & DefaultDivPropsT;
