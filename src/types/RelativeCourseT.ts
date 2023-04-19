import { RelativeKeyCourse } from "../enums/relativeKeyCourse";

export type RelativeCourseT = {
  [key in RelativeKeyCourse]: number
}
