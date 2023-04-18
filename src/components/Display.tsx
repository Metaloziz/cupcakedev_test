import React, { FC, useState, useEffect } from 'react';
import { api } from "../api/api";
import { initial_course } from "../constants/initial_course";
import { Path } from "../enums/path";
import { StateCourseT } from "../types/stateCourseT";
import { Courses } from "./Courses/Courses";
import style from './styles.module.css'


export const Display: FC = () => {

  const [coursesFirst, setCoursesFirst] = useState<StateCourseT>(initial_course)
  const [coursesSecond, setCoursesSecond] = useState<StateCourseT>(initial_course)
  const [coursesThird, setCoursesThird] = useState<StateCourseT>(initial_course)

  useEffect(() => {
    api.getData(Path.FIRST, setCoursesFirst)
    api.getData(Path.SECOND, setCoursesSecond)
    api.getData(Path.THIRD, setCoursesThird)

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
      <Courses courses={coursesThird} title={Path.THIRD}/>

    </div>
  );
};
