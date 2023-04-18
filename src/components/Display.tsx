import React, { FC, useState, useEffect } from 'react';
import { api } from "../api/api";
import { Path } from "../enums/path";
import style from './styles.module.css'


export const Display: FC = () => {

  const [value, setValue] = useState<number[]>([1, 2, 3])

  useEffect(() => {
    api.getData(Path.FIRST, setValue)
    // api.getData(Path.SECOND)
    // api.getData(Path.THIRD)
  }, [])

  return (
    <div className={style.main}>
      <div>
        <div>Pair name/market</div>
        <div>RUB/CUPCAKE</div>
        <div>USD/CUPCAKE</div>
        <div>EUR/CUPCAKE</div>
      </div>

      <div>
        <div>FIRST</div>
        {value.map((course) => <div key={course}>{course}</div>)}
      </div>
    </div>
  );
};
