import { DefaultDivPropsT } from 'types/DefaultDivPropsT';

export type CellPropsT = {
  value: string | number;
  isLowes?: boolean;
} & DefaultDivPropsT;
