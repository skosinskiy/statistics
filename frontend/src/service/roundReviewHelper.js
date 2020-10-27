
export const halfsScore = (eventList) => {
  const tmpArr = eventList.forEach((event) => {
    let counterFirstHalf = [0, 0]
    let counterSecondHalf = [0, 0]

    if (event.type === 'GOAL' && event.minute <= 45) {
      // time one
    } else if (event.type === 'GOAL') {
      // time two
    }
    return [counterFirstHalf[0] + ' - ' + counterFirstHalf[1], counterSecondHalf[0] + ' - ' + counterSecondHalf[1]]
  })
  console.log(tmpArr)
  return ['2', '3']
}