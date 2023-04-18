import { Currency } from "../enums/currency";
import { StateCourseT } from "../types/stateCourseT";
import { DEFAULT_COURSE } from "./default_course";

export const initial_courses: StateCourseT = {
  [Currency.RUB]: DEFAULT_COURSE,
}
