//* Write 'howSum(targetSum, [numbers]) -> returns array with a first combination of elements that sums to targetSum || return null
//**  Can reuse elements for sum */

const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, numbers)
    if (remainderResult !== null) {
      return [...remainderResult, num]
    }
  }
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
 *  TIME: O(n^m * m)
 *  SPACE: O(m)
 */
