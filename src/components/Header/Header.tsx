import React, { FC } from "react";
import { headersTable } from "../../constants/headersTable";
import { Cell } from "../Cell/Cell";
import style from './styles.module.css'

export const Header: FC = () => {

  return (
    <div className={style.main}>{headersTable.map((element) =>
      <Cell key={element} value={element}/>)}</div>
  );
};
