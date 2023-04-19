import React, { FC, memo } from 'react';

import { CellPropsT } from '../../types/components/CellPropsT';
import { rounderThreeDigits } from '../../utils/rounderThreeDigits';

import style from './styles.module.css';

export const Cell: FC<CellPropsT> = memo(({ value, isLowes }) => (
  <div className={`${style.main} ${isLowes ? style.lowest : ''}`}>
    {typeof value === 'string' ? value : rounderThreeDigits(value)}
  </div>
));
