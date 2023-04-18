import React, { FC, memo } from "react";

type CoursesPropsT = {
  title: string
  courses: number[]
}

export const Courses: FC<CoursesPropsT> = memo(({courses, title}) => {

  console.log(`render ${title}`)
  return (
    <div>
      <div>{title}</div>
      <div>
        {courses.map((course) => <div key={course}>{course}</div>)}
      </div>
    </div>
  );
});
