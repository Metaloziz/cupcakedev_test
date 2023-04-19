import { BASE_URL } from '../constants/base_url';
import { RECONNECT_TIME } from '../constants/reconnect_time';
import { TYPE_REQUEST } from '../constants/type_request';
import { Path } from '../enums/path';
import { StatusCode } from '../enums/statusCode';
import { ResponseCourseT } from '../types/ResponseCourseT';
import { StateHandleT } from '../types/utils/StateHandleT';
import { convertResponseData } from '../utils/convertResponseData';

export const API = {
  async getData(path: Path, handle: StateHandleT) {
    const response = await fetch(BASE_URL + path + TYPE_REQUEST);

    if (response.status === StatusCode.SERVER_ERROR) {
      await this.getData(path, handle);
    } else if (response.status !== StatusCode.SUCCESS) {
      console.warn(response.statusText);
      await new Promise(resolve => setTimeout(resolve, RECONNECT_TIME));
      await this.getData(path, handle);
    } else {
      const message = await response.text();
      const { rates }: ResponseCourseT = JSON.parse(message);
      handle(convertResponseData(rates));
      await this.getData(path, handle);
    }
  },
};
