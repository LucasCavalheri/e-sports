export function convertHourStringToMinutes(hourString: string) {
  console.log('Hour string', hourString)
  const [hour, minutes] = hourString.split(':').map(Number)
  const timeInMinutes = hour * 60 + minutes

  return timeInMinutes
}