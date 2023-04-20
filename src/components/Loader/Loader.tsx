import { FC, memo } from 'react';

import style from './Loader.module.css';

export const Loader: FC = memo(() => <div className={style.loader} />);
