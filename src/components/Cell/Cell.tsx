import React, { FC, memo } from "react";
import { rounderThreeDigits } from "../../utils/rounderThreeDigits";
import style from './styles.module.css'

type CellPropsT = {
  value: string | number
  isLowes?: boolean
}
export const Cell: FC<CellPropsT> = memo(({value, isLowes}) => {

  return (
    <div className={`${style.main} ${isLowes ? style.lowest : ''}`}>
      {typeof value === 'string' ? value : rounderThreeDigits(value)}
    </div>
  );
});
