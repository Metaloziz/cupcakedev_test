import React, { FC } from 'react';

import { DEFAULT_COURSE } from '../../constants/default_course';
import { RowPropsT } from '../../types/components/RowPropsT';
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
        isLowes={value === Math.min(...values)}
      />
    ),
  );

  return (
    <div className={style.main}>
      <Cell value={title} />
      {cells}
    </div>
  );
};
