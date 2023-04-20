import { FC } from 'react';

import style from './Row.module.css';

import { Cell } from 'components/Cell/Cell';
import { Loader } from 'components/Loader/Loader';
import { DEFAULT_COURSE } from 'constants/defaultCourse';
import { RowPropsT } from 'types/components/RowPropsT';
import { addBaseCurrencyToTitle } from 'utils/addBaseCurrencyToTitle';
import { checkIsLowestValue } from 'utils/checkIsLowestValue';

export const Row: FC<RowPropsT> = ({ values, title }) => {
  const cells = values.map(({ value, key }) =>
    value === DEFAULT_COURSE ? (
      <Loader key={key} />
    ) : (
      <Cell key={key} value={value} isLowes={checkIsLowestValue(value, values)} />
    ),
  );

  return (
    <div className={style.main}>
      <Cell value={addBaseCurrencyToTitle(title)} />
      {cells}
    </div>
  );
};
