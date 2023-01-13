//! Helper methods collect results outside
//! Not the pure way

function collectOdds(arr) {
  const passedArray = validationGuard(arr)
  if (passedArray.isInvalid) return passedArray.errorMsg

  let result = []

  function recursiveHelper(helperInput) {
    //! trip wire
    if (helperInput.length === 0) return

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    console.log(helperInput.slice(1))
    recursiveHelper(helperInput.slice(1))
  }
  recursiveHelper(arr)

  return result
}

console.log(collectOdds([]))

function validationGuard(arr) {
  if (!Array.isArray(arr)) return { isInvalid: true, errorMsg: 'not and array' }
  if (arr.length === 0) return { isInvalid: true, errorMsg: 'empty array' }
  return { isInvalid: false }
}
