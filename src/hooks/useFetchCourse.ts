import { useState, useEffect } from 'react';

import { API } from '../api/API';
import { initialCourses } from '../constants/initial_courses';
import { Path } from '../enums/path';
import { StateCourseT } from '../types/StateCourseT';
import { GetCurrentCourseT } from '../types/utils/GetCurrentCourseT';

export const useFetchCourse = (): { getCurrentCourse: GetCurrentCourseT } => {
  const [firstSourceCourses, setFirstSourceCourses] =
    useState<StateCourseT>(initialCourses);
  const [secondSourceCourses, setSecondSourceCourses] =
    useState<StateCourseT>(initialCourses);
  const [thirdSourceCourses, setThirdSourceCourses] =
    useState<StateCourseT>(initialCourses);

  useEffect(() => {
    API.getData(Path.FIRST, setFirstSourceCourses);
    API.getData(Path.SECOND, setSecondSourceCourses);
    API.getData(Path.THIRD, setThirdSourceCourses);
  }, []);

  const getCurrentCourse: GetCurrentCourseT = currency => [
    firstSourceCourses[currency],
    secondSourceCourses[currency],
    thirdSourceCourses[currency],
  ];

  return { getCurrentCourse };
};
