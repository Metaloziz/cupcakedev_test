import React, { FC, useState, useEffect } from 'react';
import { api } from "./api/api";
import style from './App.module.css'
import { Header } from "./components/Header/Header";
import { Row } from "./components/Row/Row";
import { DEFAULT_COURSE } from "./constants/default_course";
import { initial_courses } from "./constants/initial_courses";
import { relativeKeysCourses } from "./constants/relativeKeysCourses";
import { Path } from "./enums/path";
import { StateCourseT } from "./types/stateCourseT";

export const App: FC = () => {

  const [firstSourceCourses, setFirstSourceCourses] = useState<StateCourseT>(initial_courses)
  const [secondSourceCourses, setSecondSourceCourses] = useState<StateCourseT>(initial_courses)
  const [thirdSourceCourses, setThirdSourceCourses] = useState<StateCourseT>(initial_courses)

  useEffect(() => {
    api.getData(Path.FIRST, setFirstSourceCourses)
    api.getData(Path.SECOND, setSecondSourceCourses)
    api.getData(Path.THIRD, setThirdSourceCourses)
  }, [])

  const getCurrentCourse = (currency: string): number[] => {
    return [
      firstSourceCourses[currency] ?? DEFAULT_COURSE,
      secondSourceCourses[currency] ?? DEFAULT_COURSE,
      thirdSourceCourses[currency] ?? DEFAULT_COURSE
    ]
  }

  const rows = relativeKeysCourses.map((key) =>
    <Row title={key} values={getCurrentCourse(key)}/>)

  // todo почему-то не все ячейки показывают минимальное значение ?
  return (
    <div className={style.main}>
      <Header/>
      {rows}
    </div>);
};
