import { BASE_URL } from "../constants/base_url";
import { TYPE_REQUEST } from "../constants/type_request";
import { Path } from "../enums/path";
import { UseSateHandleT } from "../types/useSateHandleT";
import { convertResponseData } from "../utils/convertResponseData";


export const api = {
  getData: async function (path: Path, handle: UseSateHandleT) {
    let response = await fetch(BASE_URL + path + '/' + TYPE_REQUEST)

    if (response.status == 502) {

      await this.getData(path, handle);

    } else if (response.status != 200) {

      console.warn(response.statusText);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.getData(path, handle);

    } else {

      let message = await response.text();
      handle(convertResponseData(message))
      await this.getData(path, handle);

    }
  }
}


