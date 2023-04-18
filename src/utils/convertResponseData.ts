import { CourseT } from "../types/courseT";
import { rounderThreeDigits } from "./rounderThreeDigits";

export const convertResponseData = (data: string): number[] => {
  const result: CourseT = JSON.parse(data)

  let newValues: number[] = []

  Object.keys(result.rates).forEach((course) => newValues.push(rounderThreeDigits(result.rates[course])))

  return newValues
}
