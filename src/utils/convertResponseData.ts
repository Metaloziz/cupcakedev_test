import { Currency } from "../enums/currency";
import { CourseT } from "../types/courseT";
import { StateCourseT } from "../types/stateCourseT";

export const convertResponseData = (data: string): StateCourseT => {
  const {rates}: CourseT = JSON.parse(data)

  // todo так ли считают в банках RUS/USD ?
  rates[Currency.RUB + Currency.USD] = rates[Currency.RUB] / rates[Currency.USD]
  rates[Currency.RUB + Currency.EUR] = rates[Currency.RUB] / rates[Currency.EUR]
  rates[Currency.EUR + Currency.USD] = rates[Currency.EUR] / rates[Currency.USD]

  return rates
}

