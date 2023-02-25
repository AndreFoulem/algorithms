export {}
//-> Can sum

//-* Write howSum(targetSum: Int, numbers: [Int]) -> [Int, Int...] combination of arguments || null

//-** Can return any combination

//-ex: canSum(7, [5,4,3]) -> [4,3]

//-params: m = targetSum  n = numbers.length

//-time: O(m^2 * n)  space: 0(m^2)

const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null)

  //? seed data
  table[0] = []
}

console.log(howSum(7, [3, 2, 7, 4, 0]))
