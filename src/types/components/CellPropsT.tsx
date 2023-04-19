import { DefaultDivPropsT } from '../DefaultDivPropsT';

export type CellPropsT = {
  value: string | number;
  isLowes?: boolean;
} & DefaultDivPropsT;
