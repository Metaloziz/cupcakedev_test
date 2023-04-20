import { memo } from 'react';

import style from './Header.module.css';

import { Cell } from 'components/Cell/Cell';
import { HeaderPropsT } from 'types/components/HeaderPropsT';

export const Header = memo<HeaderPropsT>(({ headers }) => {
  const cells = headers.map(element => <Cell key={element} value={element} />);

  return <div className={style.main}>{cells}</div>;
});
