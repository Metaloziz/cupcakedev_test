import { BASE_URL } from 'constants/baseUrl';
import { TYPE_REQUEST } from 'constants/typeRequest';
import { Path } from 'enums/path';

export const API = {
  getData: (path: Path) => fetch(BASE_URL + path + TYPE_REQUEST),
};
