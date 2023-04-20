import { memo } from 'react';

import style from './Cell.module.css';

import { CellPropsT } from 'types/components/CellPropsT';
import { rounderThreeDigits } from 'utils/rounderThreeDigits';

export const Cell = memo<CellPropsT>(({ value, isLowes }) => (
  <div className={`${style.main} ${isLowes ? style.lowest : ''}`}>
    {typeof value === 'string' ? value : rounderThreeDigits(value)}
  </div>
));
