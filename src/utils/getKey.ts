import { Path } from 'enums/path';
import { AllKeysT } from 'types/AllKeysT';

export const getKey = (key1: AllKeysT, key2: Path): string => key1 + key2;
