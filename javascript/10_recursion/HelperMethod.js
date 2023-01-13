//! Helper methods collect results outside

function collectOdds(arr) {
  // const validateGuard = guard(arr)
  // if (validateGuard.isInvalid) return validateGuard.error

  let result = []

  function recursiveHelper(helperInput) {
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    console.log(helperInput.slice(1))
    recursiveHelper(helperInput.slice(1))
  }
  recursiveHelper(arr)

  return result
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// function guard(arr) {
//   if (!Array.isArray(arr)) return { isInvalid: true, error: 'not and array' }
//   if (arr.length === 0) return { isInvalid: true, error: 'empty array' }
//   return { isInvalid: false }
// }
