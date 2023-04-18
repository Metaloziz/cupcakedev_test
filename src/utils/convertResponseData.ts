import { Course } from "../enums/course";
import { CourseT } from "../types/courseT";
import { StateCourseT } from "../types/stateCourseT";

export const convertResponseData = (data: string): StateCourseT => {
  const {rates}: CourseT = JSON.parse(data)

  // todo так ли считают в банках RUS/USD ?
  rates[Course.RUB + Course.USD] = rates[Course.RUB] / rates[Course.USD]
  rates[Course.RUB + Course.EUR] = rates[Course.RUB] / rates[Course.EUR]
  rates[Course.EUR + Course.USD] = rates[Course.EUR] / rates[Course.USD]

  return rates
}

