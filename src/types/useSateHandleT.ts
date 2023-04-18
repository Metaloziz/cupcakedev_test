import { StateCourseT } from "./stateCourseT";

export type UseSateHandleT = (value: (((prevState: StateCourseT) => StateCourseT) | StateCourseT)) => void
