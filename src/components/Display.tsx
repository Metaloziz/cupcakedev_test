import React, { FC, useState, useEffect } from 'react';
import { api } from "../api/api";
import { CUPCAKE } from "../constants/cupcake";
import { DEFAULT_COURSE } from "../constants/default_course";
import { initial_course } from "../constants/initial_course";
import { Currency } from "../enums/currency";
import { Path } from "../enums/path";
import { StateCourseT } from "../types/stateCourseT";
import { Row } from "./Row/Row";
import style from './styles.module.css'

export const Display: FC = () => {

  const headers = ['Pair name/market', Path.FIRST, Path.SECOND, Path.THIRD]

  const [coursesFirst, setCoursesFirst] = useState<StateCourseT>(initial_course)
  const [coursesSecond, setCoursesSecond] = useState<StateCourseT>(initial_course)
  const [coursesThird, setCoursesThird] = useState<StateCourseT>(initial_course)

  useEffect(() => {
    api.getData(Path.FIRST, setCoursesFirst)
    api.getData(Path.SECOND, setCoursesSecond)
    api.getData(Path.THIRD, setCoursesThird)
  }, [])


  const getCurrentCourse = (currency: Currency): number[] => {
    return [
      coursesFirst[currency] ?? DEFAULT_COURSE,
      coursesSecond[currency] ?? DEFAULT_COURSE,
      coursesThird[currency] ?? DEFAULT_COURSE
    ]
  }

  return (
    <div className={style.main}>
      <div className={style.header}>{headers.map((element) =>
        <div key={element}>{element}</div>)}</div>


      <Row title={Currency.RUB + ' / ' + CUPCAKE}
           values={getCurrentCourse(Currency.RUB)}/>
      <Row title={Currency.EUR + ' / ' + CUPCAKE}
           values={getCurrentCourse(Currency.EUR)}/>
      <Row title={Currency.USD + ' / ' + CUPCAKE}
           values={getCurrentCourse(Currency.USD)}/>

    </div>
  )
    ;
};
