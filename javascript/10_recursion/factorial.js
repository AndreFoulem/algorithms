function factorialReducer(num) {
  if (num === 1) return 1 //trip wire
  return num * factorial(num - 1)
}

console.log(factorialReducer(6))

function factorial(num) {
  //3
  let total = 1
  while (num > 0) {
    total *= num
    num--
  }
  return total
}

console.log(factorial(6))
