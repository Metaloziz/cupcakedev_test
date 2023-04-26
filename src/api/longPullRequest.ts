import { RECONNECT_TIME } from 'constants/reconnectTime';
import { Path } from 'enums/path';
import { StatusCode } from 'enums/statusCode';
import { ResponseCourseT } from 'types/ResponseCourseT';
import { StateHandleT } from 'types/utils/StateHandleT';
import { convertResponseData } from 'utils/convertResponseData';

export const longPullRequest = async (
  request: (path: Path) => Promise<Response>,
  path: Path,
  handle: StateHandleT,
): Promise<void> => {
  const response = await request(path);

  if (response.status === StatusCode.SERVER_ERROR) {
    await request(path);
  } else if (response.status !== StatusCode.SUCCESS) {
    console.warn(response.statusText);
    await new Promise(resolve => setTimeout(resolve, RECONNECT_TIME));
    await request(path);
  } else {
    const message = await response.text();
    const { rates }: ResponseCourseT = JSON.parse(message);
    handle(convertResponseData(rates));
    await request(path);
  }
};
