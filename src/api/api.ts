import { Path } from "../enums/path";

const BASE_URL = 'http://localhost:3000/api/v1/'


export const api = {
  getData: async function (path: Path) {
    let response = await fetch(BASE_URL + path)

    if (response.status == 502) {
      // Статус 502 - это таймаут соединения;
      // возможен, когда соединение ожидало слишком долго
      // и сервер (или промежуточный прокси) закрыл его
      // давайте восстановим связь
      await this.getData(path);
    } else if (response.status != 200) {
      // Какая-то ошибка, покажем её
      console.warn(response.statusText);
      // Подключимся снова через секунду.
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.getData(path);
    } else {
      // Получим и покажем сообщение
      let message = await response.text();
      console.log(message);
      // И снова вызовем subscribe() для получения следующего сообщения
      await this.getData(path);
    }
  }
}


