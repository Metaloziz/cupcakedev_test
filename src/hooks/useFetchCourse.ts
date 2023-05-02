import { useState, useEffect } from 'react';

import { API } from 'api/API';
import { longPullRequest } from 'api/longPullRequest';
import { usualRequest } from 'api/usualRequest';
import { initialCourses } from 'constants/initialCourses';
import { TYPE_REQUEST } from 'constants/typeRequest';
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
    usualRequest(API.getData, Path.FIRST, setFirstSourceCourses);
    usualRequest(API.getData, Path.SECOND, setSecondSourceCourses);
    usualRequest(API.getData, Path.THIRD, setThirdSourceCourses);
  }, []);

  useEffect(() => {
    longPullRequest(API.getData, Path.FIRST + TYPE_REQUEST, setFirstSourceCourses);
    longPullRequest(API.getData, Path.SECOND + TYPE_REQUEST, setSecondSourceCourses);
    longPullRequest(API.getData, Path.THIRD + TYPE_REQUEST, setThirdSourceCourses);
  }, []);

  const getCurrentCourse: GetCurrentCourseT = currency => [
    {
      key: getKey(currency, Path.FIRST),
      value: firstSourceCourses[currency],
    },
    {
      key: getKey(currency, Path.SECOND),
      value: secondSourceCourses[currency],
    },
    {
      key: getKey(currency, Path.THIRD),
      value: thirdSourceCourses[currency],
    },
  ];

  return { getCurrentCourse };
};
