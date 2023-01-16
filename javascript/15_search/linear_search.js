const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Florida',
  '',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
]

// o(n)
function findState(states, targetValue) {
  for (i in states) {
    if (states[i] === targetValue) return i
  }
  return -1
}

console.log(findState(states, 'Idaho'))
