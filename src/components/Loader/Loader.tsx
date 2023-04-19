import { FC, memo } from 'react';
import style from './Loader.module.css'
import React from "react";

export const Loader: FC = memo(() => {
    return (
    <div className={style.loader}/>
  );
});
