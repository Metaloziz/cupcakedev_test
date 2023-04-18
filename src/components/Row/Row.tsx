import React, { FC } from "react";
import { DEFAULT_COURSE } from "../../constants/default_course";
import { Cell } from "../Cell/Cell";
import { Loader } from "../Loader/Loader";

import style from './styles.module.css'

type RowPropsT = {
  title: string
  values: number[]
}
export const Row: FC<RowPropsT> = ({values, title}) => {

  const cells = values.map((value) =>
    value === DEFAULT_COURSE
      ? <Loader/>
      : <Cell value={value} isLowes={value === Math.min(...values)}/>
  )

  return (
    <div className={style.main}>
      <Cell value={title}/>
      {cells}
    </div>
  );
};
