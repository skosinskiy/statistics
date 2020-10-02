
export const parseDate = (dateISO) => {
  const newDate = new Date(dateISO)
  return newDate.getDate() +
    '-' +
    ('0' + (newDate.getMonth() + 1)).slice(-2) +
    '-' + newDate.getFullYear() +
     ' ' +
    ('0' + newDate.getHours()).slice(-2) +
    ':' +
    ('0' + newDate.getMinutes()).slice(-2)
}