export const parseTime = (date = new Date()) => {
  return {
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getMinutes()
  }
}