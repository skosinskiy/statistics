export const halfsScore = (eventList, home) => {
  let counterFirstHalf = [0, 0]
  let counterSecondHalf = [0, 0]

  eventList.forEach((event) => {
    if (event.type !== 'GOAL') return
    if (event.minute <= 45) {
      event.team.title === home ? counterFirstHalf[0]++ : counterFirstHalf[1]++
    } else {
      event.team.title === home ? counterSecondHalf[0]++ : counterSecondHalf[1]++
    }
  })
  const uiHelper = (arr1, arr2) => [String(arr1[0] + ' - ' + arr1[1]), String(arr2[0] + ' - ' + arr2[1])]
  return uiHelper(counterFirstHalf, counterSecondHalf)
}

export const eventCutter = (eventList, home) => {
  const footballUiEvent = {
    1: [],
    2: []
  }
  eventList.forEach((event) => {
    if (event.minute <= 45) {
      footballUiEvent[1].push(event)
    } else {
      footballUiEvent[2].push(event)
    }
  })
  return footballUiEvent
}

export const eventClassHelper = (currentTeam, homeTeam) => {
  return currentTeam === homeTeam ? 'event left' : 'event right'
}