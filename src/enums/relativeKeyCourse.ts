import { Currency } from "./currency";

export enum RelativeKeyCourse {
  RUB_USD_KEY = Currency.RUB + '/' + Currency.USD,
  RUB_EUR_KEY = Currency.RUB + '/' + Currency.EUR,
  EUR_USD_KEY = Currency.EUR + '/' + Currency.USD
}
