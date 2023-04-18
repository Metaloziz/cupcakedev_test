import React, { FC } from "react";
import { Cell } from "../Cell/Cell";

import style from './styles.module.css'

type RowPropsT = {
  title: string
  values: number[]
}
export const Row: FC<RowPropsT> = ({values, title}) => {

  const cells = values.map((value) => {
    return <Cell value={value} isLowes={value === Math.min(...values)}/>
  })

  return (
    <div className={style.main}>
      <div>{title}</div>
      {cells}
    </div>
  );
};
