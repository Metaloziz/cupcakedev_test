import { StateHandleT } from 'types/utils/StateHandleT';

export type RequestT = (
  request: (path: string) => Promise<Response>,
  path: string,
  handle: StateHandleT,
) => Promise<void>;
