import React, { FC, useState, useEffect } from 'react';
import { api } from "./api/api";
import { Header } from "./components/Header/Header";
import { Row } from "./components/Row/Row";
import { CUPCAKE } from "./constants/cupcake";
import { DEFAULT_COURSE } from "./constants/default_course";
import { initial_courses } from "./constants/initial_courses";
import { Currency } from "./enums/currency";
import { Path } from "./enums/path";
import { StateCourseT } from "./types/stateCourseT";
import style from './App.module.css'

export const App: FC = () => {

  const [firstSourceCourses, setFirstSourceCourses] = useState<StateCourseT>(initial_courses)
  const [secondSourceCourses, setSecondSourceCourses] = useState<StateCourseT>(initial_courses)
  const [thirdSourceCourses, setThirdSourceCourses] = useState<StateCourseT>(initial_courses)

  useEffect(() => {
    api.getData(Path.FIRST, setFirstSourceCourses)
    api.getData(Path.SECOND, setSecondSourceCourses)
    api.getData(Path.THIRD, setThirdSourceCourses)
  }, [])

  const getCurrentCourse = (currency: Currency): number[] => {
    return [
      firstSourceCourses[currency] ?? DEFAULT_COURSE,
      secondSourceCourses[currency] ?? DEFAULT_COURSE,
      thirdSourceCourses[currency] ?? DEFAULT_COURSE
    ]
  }

  return (
    <div className={style.main}>
      <Header/>

      <Row title={Currency.RUB + ' / ' + CUPCAKE}
           values={getCurrentCourse(Currency.RUB)}/>
      <Row title={Currency.EUR + ' / ' + CUPCAKE}
           values={getCurrentCourse(Currency.EUR)}/>
      <Row title={Currency.USD + ' / ' + CUPCAKE}
           values={getCurrentCourse(Currency.USD)}/>

    </div>);
};
