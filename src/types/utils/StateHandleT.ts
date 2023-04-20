import { StateCourseT } from 'types/StateCourseT';

export type StateHandleT = (
  value: ((prevState: StateCourseT) => StateCourseT) | StateCourseT,
) => void;
