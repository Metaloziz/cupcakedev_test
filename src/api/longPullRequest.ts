import { RECONNECT_TIME } from 'constants/reconnectTime';
import { StatusCode } from 'enums/statusCode';
import { RequestT } from 'types/RequestT';
import { ResponseCourseT } from 'types/ResponseCourseT';
import { convertResponseData } from 'utils/convertResponseData';

export const longPullRequest: RequestT = async (request, path, handle) => {
  const response = await request(path);

  if (response.status === StatusCode.SERVER_ERROR) {
    await longPullRequest(request, path, handle);
  } else if (response.status !== StatusCode.SUCCESS) {
    console.warn(response.statusText);
    await new Promise(resolve => setTimeout(resolve, RECONNECT_TIME));
    await longPullRequest(request, path, handle);
  } else {
    const message = await response.text();
    const { rates }: ResponseCourseT = JSON.parse(message);
    handle(convertResponseData(rates));
    await longPullRequest(request, path, handle);
  }
};
