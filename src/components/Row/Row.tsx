import { FC } from 'react';

import style from './Row.module.css';

import { Cell } from 'components/Cell/Cell';
import { Loader } from 'components/Loader/Loader';
import { DEFAULT_COURSE } from 'constants/defaultCourse';
import { RowPropsT } from 'types/components/RowPropsT';
import { addBaseCurrencyToTitle } from 'utils/addBaseCurrencyToTitle';
import { checkIsLowestValue } from 'utils/checkIsLowestValue';
import { getIndex } from 'utils/getIndex';

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
