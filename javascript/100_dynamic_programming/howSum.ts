//* Write 'howSum(targetSum, [numbers]) -> returns array with a first combination of elements that sums to targetSum || return null
//**  Can reuse elements for sum */

const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, numbers, memo)
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num]
      return memo[targetSum]
    }
  }
  memo[targetSum] = null
  return null
}

console.log(howSum(8, [2, 3, 5]))

/**
 * BRUTE FORCE COMPLEXITY
 *  m = target sum
 *  n= numbers.length
 *  TIME: O(n^m * m)
 *  SPACE: O(m)
 */

/**
 * MEMO COMPLEXITY
 *  m = target sum
 *  n= numbers.length
 *  TIME: O(n*m^m)
 *  SPACE: O(m*m)
 */
