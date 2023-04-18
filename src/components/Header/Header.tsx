import React, { FC } from "react";
import { Path } from "../../enums/path";
import { Cell } from "../Cell/Cell";
import style from './styles.module.css'

export const Header: FC = () => {

  const headers = ['Pair name / market', Path.FIRST, Path.SECOND, Path.THIRD]

  return (
    <div className={style.main}>{headers.map((element) =>
      <Cell key={element} value={element}/>)}</div>
  );
};
