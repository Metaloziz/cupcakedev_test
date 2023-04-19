import { useState, useEffect } from "react";
import { API } from "../api/API";
import { initial_courses } from "../constants/initial_courses";
import { Path } from "../enums/path";
import { GetCurrentCourseT } from "../types/utils/GetCurrentCourseT";
import { StateCourseT } from "../types/StateCourseT";

export const useFetchCourse = (): { getCurrentCourse: GetCurrentCourseT } => {

  const [firstSourceCourses, setFirstSourceCourses] = useState<StateCourseT>(initial_courses)
  const [secondSourceCourses, setSecondSourceCourses] = useState<StateCourseT>(initial_courses)
  const [thirdSourceCourses, setThirdSourceCourses] = useState<StateCourseT>(initial_courses)

  useEffect(() => {
    API.getData(Path.FIRST, setFirstSourceCourses)
    API.getData(Path.SECOND, setSecondSourceCourses)
    API.getData(Path.THIRD, setThirdSourceCourses)
  }, [])

  const getCurrentCourse: GetCurrentCourseT = (currency) => {

    return [
      firstSourceCourses[currency],
      secondSourceCourses[currency],
      thirdSourceCourses[currency]
    ]
  }

  return {getCurrentCourse}
}
