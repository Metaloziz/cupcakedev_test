import React, { FC } from 'react';

import { DEFAULT_COURSE } from '../../constants/defaultCourse';
import { RowPropsT } from '../../types/components/RowPropsT';
import { addBaseCurrencyToTitle } from '../../utils/addBaseCurrencyToTitle';
import { checkIsLowestValue } from '../../utils/checkIsLowestValue';
import { getIndex } from '../../utils/getIndex';
import { Cell } from '../Cell/Cell';
import { Loader } from '../Loader/Loader';

import style from './Row.module.css';

export const Row: FC<RowPropsT> = ({ values, title }) => {
  const cells = values.map((value, index) =>
    value === DEFAULT_COURSE ? (
      <Loader key={getIndex(value, index)} />
    ) : (
      <Cell
        key={getIndex(value, index)}
        value={value}
        isLowes={checkIsLowestValue(value, values)}
      />
    ),
  );

  return (
    <div className={style.main}>
      <Cell value={addBaseCurrencyToTitle(title)} />
      {cells}
    </div>
  );
};
