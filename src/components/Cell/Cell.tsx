import React, { FC, memo } from "react";
import { rounderThreeDigits } from "../../utils/rounderThreeDigits";
import style from './styles.module.css'

type CellPropsT = {
  value: number
  isLowes: boolean
}
export const Cell: FC<CellPropsT> = memo(({value, isLowes}) => {

  return (
    <div className={isLowes ? style.lowest : ''}>
      {rounderThreeDigits(value)}
    </div>
  );
});
