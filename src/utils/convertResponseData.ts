import { RUB_USD_KEY, RUB_EUR_KEY, EUR_USD_KEY } from "../constants/relativeKeys";
import { Currency } from "../enums/currency";
import { CourseT } from "../types/courseT";
import { StateCourseT } from "../types/stateCourseT";

export const convertResponseData = (data: string): StateCourseT => {
  const {rates}: CourseT = JSON.parse(data)

  // todo так ли считают в банках RUS/USD ?
  rates[RUB_USD_KEY] = rates[Currency.RUB] / rates[Currency.USD]
  rates[RUB_EUR_KEY] = rates[Currency.RUB] / rates[Currency.EUR]
  rates[EUR_USD_KEY] = rates[Currency.EUR] / rates[Currency.USD]

  return rates
}

