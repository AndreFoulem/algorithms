//* Best Sum

/**
 * Write bestSum(targetSum: int, [numbers: int])  -> shortest combination for sum
 */

const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (let num in numbers) {
    const remainder = targetSum - Number(num)
    const remainderCombination = bestSum(remainder, numbers)

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num]

      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination
      }
    }
  }

  return shortestCombination
}

console.log(bestSum(7, [5, 3, 4, 7]))
