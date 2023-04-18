import { FC, useState, useEffect } from 'react';
import React from "react";
import { api } from "../api/api";
import { Path } from "../enums/path";
import style from './styles.module.css'

export const Display: FC = () => {

  const [value, setValue] = useState(1)

  const valueHandel = () => {
    setValue((prev) => prev + 1)
  }

  useEffect(() => {
    api.getData(Path.FIRST)
    // api.getData(Path.SECOND)
    // api.getData(Path.THIRD)
  }, [])

  return (
    <div className={style.main}>
      <div onClick={valueHandel}>{value}</div>
    </div>
  );
};
