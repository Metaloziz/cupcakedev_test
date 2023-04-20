import { AllKeysT } from 'types/AllKeysT';
import { RatesMapT } from 'types/RatesMapT';

export type GetCurrentCourseT = (currency: AllKeysT) => RatesMapT[];
