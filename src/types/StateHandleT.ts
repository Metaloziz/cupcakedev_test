import { StateCourseT } from "./StateCourseT";

export type StateHandleT = (value: (((prevState: StateCourseT) => StateCourseT) | StateCourseT)) => void
