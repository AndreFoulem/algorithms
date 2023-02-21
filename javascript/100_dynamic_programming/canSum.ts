/**
  1) Write a fn 'canSum(targetSum, numbers)' that takes in a targetSum and an Arr of numbers as args + returns bool
  2) You may use an element of the array as many times as needed
  3) You may assume that all input numbers are non-negative
 */

// ex: canSum(7, [5,3,4,7]) -> true

const canSum = (targetSum, numArray, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]

  base: if (targetSum === 0) return true
  invalidBase: if (targetSum < 0) return false

  for (let num of numArray) {
    const remainder = targetSum - num
    if (canSum(remainder, numArray, memo) === true) {
      memo[targetSum] = true
      return true
    }
  }

  memo[targetSum] = false
  return false
}

console.log(canSum(7, [2, 4]))
/**
 * Complexity of BRUTE FORCE
 * O(n^m)
 * O(m)
 */
/**
 * Complexity of MEMO
 * O(n*m)
 * O(m)
 */
