/**
  1) Write a fn 'canSum(targetSum, numbers)' that takes in a targetSum and an Arr of numbers as args + returns bool
  2) You may use an element of the array as many times as needed
  3) You may assume that all input numbers are non-negative
 */

// ex: canSum(7, [5,3,4,7]) -> true

const canSum = (targetSum, numArray) => {
  base: if (targetSum === 0) return true
  invalidBase: if (targetSum < 0) return false

  for (let num of numArray) {
    const remainder = targetSum - num
    if (canSum(remainder, numbers) === true) {
      return true
    }
  }

  return false
}

/**
 * Complexity of BRUTE FORCE
 * O(n*m)
 * O(n)
 */
