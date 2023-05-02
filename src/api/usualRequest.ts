import { StatusCode } from 'enums/statusCode';
import { RequestT } from 'types/RequestT';
import { ResponseCourseT } from 'types/ResponseCourseT';
import { convertResponseData } from 'utils/convertResponseData';

export const usualRequest: RequestT = async (request, path, handle) => {
  const response = await request(path);

  if (response.status === StatusCode.SUCCESS) {
    const message = await response.text();
    const { rates }: ResponseCourseT = JSON.parse(message);
    handle(convertResponseData(rates));
  } else {
    console.warn(response);
  }
};
