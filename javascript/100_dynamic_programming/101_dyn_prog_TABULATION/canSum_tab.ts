export {}
//-> Can sum

//-* Write canSum(targetSum: Int, numbers: [Int]) -> bool

//-** Can reuse elements

//-ex: canSum(7, [5,4,3]) -> true

//-params: m = targetSum  n = numbers.length

//-time: O(mn)  space: 0(m)

const canSum = (targetSum, numbers) => {
  //-> init an arr with bool(false)
  const table = Array(targetSum + 1).fill(false)

  table[0] = true

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true
      }
    }
  }

  return table[targetSum]
}

console.log(canSum(7, [5, 4, 3]))
