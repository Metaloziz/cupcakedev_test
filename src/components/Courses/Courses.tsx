import React, { FC, memo } from "react";
import { StateCourseT } from "../../types/stateCourseT";
import { rounderThreeDigits } from "../../utils/rounderThreeDigits";
import style from './styles.module.css'

type CoursesPropsT = {
  title: string
  courses: StateCourseT
}

export const Courses: FC<CoursesPropsT> = memo(({courses, title}) => {

  console.log(title)

  const cells = Object
    .keys(courses)
    .map((course) => <div className={courses[course] > 0 ? style.lowest : ''}
                          key={course}>{rounderThreeDigits(courses[course])}</div>)

  return (
    <div>
      <div>{title}</div>
      <div>
        {cells}
      </div>
    </div>
  );
});
