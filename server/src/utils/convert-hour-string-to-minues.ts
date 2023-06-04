export function convertHourStringToMinutes(hourString: string) {
  const [hour, minutes] = hourString.split(':').map(Number)
  const timeInMinutes = hour * 60 + minutes

  return timeInMinutes
}