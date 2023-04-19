import React, { FC, memo } from "react";
import { HeaderPropsT } from "../../types/components/HeaderPropsT";
import { Cell } from "../Cell/Cell";
import style from './styles.module.css'


export const Header: FC<HeaderPropsT> = memo(({headers}) => {

    const cells = headers.map((element) =>
      <Cell key={element} value={element}/>)

    return (
      <div className={style.main}>{cells}</div>
    );
  }
)
