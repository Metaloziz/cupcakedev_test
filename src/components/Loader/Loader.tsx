import { FC, memo } from 'react';

import style from './Loader.module.css';

// почему при отсутствии пропос нужен memo, чтобы остановить перерисовки ?
export const Loader: FC = memo(() => <div className={style.loader} />);
