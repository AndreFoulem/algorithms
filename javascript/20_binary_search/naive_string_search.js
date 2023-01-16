//! Naive String Search

//? How many number of substrings pattern appear in a string

const str = 'Harold haha said haha in hambrug'

function naiveSearch(str, pattern) {
  const argumentString = guard(str)
  if (argumentString.isInvalid) return argumentString.errMsg

  count = 0

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) {
        //-> compare: if not equal break and start at again at i++
        //-> if equal, run the second if and increment the count if end of j
        break
      }
      if (j === pattern.length - 1) {
        //! 3 == 3
        count++
        console.log(`found  ${count}`)
      }
    }
  }
  return count
}

console.log(naiveSearch(str, 'haha'))

function guard(str, pattern) {
  if (typeof str !== 'string') {
    return { isInvalid: true, errMsg: 'is not a string' }
  }
  if (str.length === 0) {
    return { isInvalid: true, errMsg: 'string should not be empty' }
  }
  return false
}
