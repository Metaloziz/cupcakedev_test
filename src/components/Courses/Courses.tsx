import React, { FC, memo } from "react";
import { StateCourseT } from "../../types/stateCourseT";
import { rounderThreeDigits } from "../../utils/rounderThreeDigits";

type CoursesPropsT = {
  title: string
  courses: StateCourseT
}

export const Courses: FC<CoursesPropsT> = memo(({courses, title}) => {

  const cells = Object
    .keys(courses)
    .map((course) => <div key={course}>{rounderThreeDigits(courses[course])}</div>)

  return (
    <div>
      <div>{title}</div>
      <div>
        {cells}
      </div>
    </div>
  );
});
