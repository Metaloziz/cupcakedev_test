import { useState, useEffect, useMemo } from 'react';

import { API } from 'api/API';
import { initialCourses } from 'constants/initialCourses';
import { Path } from 'enums/path';
import { StateCourseT } from 'types/StateCourseT';
import { GetCurrentCourseT } from 'types/utils/GetCurrentCourseT';
import { getKey } from 'utils/getKey';

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
    {
      key: useMemo(() => getKey(currency, Path.FIRST), []),
      value: firstSourceCourses[currency],
    },
    {
      key: useMemo(() => getKey(currency, Path.SECOND), []),
      value: secondSourceCourses[currency],
    },
    {
      key: useMemo(() => getKey(currency, Path.THIRD), []),
      value: thirdSourceCourses[currency],
    },
  ];

  return { getCurrentCourse };
};
