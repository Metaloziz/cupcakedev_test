export type CourseT = {
  rates: {
    // todo как типизировать, чтобы ключи были только из Enum ?
    [key: string]: number
  },
  timestamp: number,
  base: string,
  date: string
}
