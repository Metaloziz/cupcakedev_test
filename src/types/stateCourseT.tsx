import { CourseT } from "./courseT";
import { ValueOf } from "./valueOf";

export type StateCourseT = ValueOf<Pick<CourseT, 'rates'>>
