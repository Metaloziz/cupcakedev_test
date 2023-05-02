import { BASE_URL } from 'constants/baseUrl';

export const API = {
  getData: (path: string) => fetch(BASE_URL + path),
};
