import React, { FC } from "react";
import { DEFAULT_COURSE } from "../../constants/default_course";
import { RowPropsT } from "../../types/components/RowPropsT";
import { Cell } from "../Cell/Cell";
import { Loader } from "../Loader/Loader";

import style from './styles.module.css'

export const Row: FC<RowPropsT> = ({values, title}) => {

  const cells = values.map((value, index) =>
    value === DEFAULT_COURSE
      ? <Loader key={value + index}/>
      : <Cell key={value + index}
              value={value}
              isLowes={value === Math.min(...values)}/>
  )

  return (
    <div className={style.main}>
      <Cell value={title}/>
      {cells}
    </div>
  );
};
