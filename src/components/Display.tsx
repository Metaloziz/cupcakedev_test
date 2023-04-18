import React, { FC, useState, useEffect } from 'react';
import { api } from "../api/api";
import { Path } from "../enums/path";
import { Courses } from "./Courses/Courses";
import style from './styles.module.css'


export const Display: FC = () => {

  const [coursesFirst, setCoursesFirst] = useState<number[]>([1, 2])
  const [coursesSecond, setCoursesSecond] = useState<number[]>([])
  const [coursesThird, setCoursesThird] = useState<number[]>([])

  useEffect(() => {
    // api.getData(Path.FIRST, setCoursesFirst)
    api.getData(Path.SECOND, setCoursesSecond)
    // api.getData(Path.THIRD, setCoursesThird)

  }, [])

  return (
    <div className={style.main}>
      <div>
        <div>Pair name/market</div>
        <div>RUB/CUPCAKE</div>
        <div>USD/CUPCAKE</div>
        <div>EUR/CUPCAKE</div>
        <div>RUB/USD</div>
        <div>RUB/EUR</div>
        <div>EUR/USD</div>
      </div>


      <Courses courses={coursesFirst} title={Path.FIRST}/>
      <Courses courses={coursesSecond} title={Path.SECOND}/>

    </div>
  );
};
