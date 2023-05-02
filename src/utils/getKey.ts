import { useMemo } from 'react';

import { Path } from 'enums/path';
import { AllKeysT } from 'types/AllKeysT';

export const getKey = (key1: AllKeysT, key2: Path): string =>
  useMemo(() => key1 + key2, []);
