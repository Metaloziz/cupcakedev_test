import React, { FC } from "react";
import { DEFAULT_COURSE } from "../../constants/default_course";
import { RowPropsT } from "../../types/components/RowPropsT";
import { addBaseCurrencyToTitle } from "../../utils/addBaseCurrencyToTitle";
import { checkIsLowestValue } from "../../utils/checkIsLowestValue";
import { Cell } from "../Cell/Cell";
import { Loader } from "../Loader/Loader";

import style from './Row.module.css'

export const Row: FC<RowPropsT> = ({values, title}) => {

  const cells = values.map((value, index) =>
    value === DEFAULT_COURSE
      ? <Loader key={value + index}/>
      : <Cell key={value + index}
              value={value}
              isLowes={checkIsLowestValue(value, values)}/>
  )

  return (
    <div className={style.main}>
      <Cell value={addBaseCurrencyToTitle(title)}/>
      {cells}
    </div>
  );
};
