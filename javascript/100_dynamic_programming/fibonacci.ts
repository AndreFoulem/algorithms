//* Fibonacci

/**
 *  Write a function <fib(n)> that takes in a number as an argument. int(number) and returns the n-th number of the fibonacci sequence
 *
 *  The 1st and 2nd number of the sequence is 1.
 *  To generate the next number of the sequence, we sum the previous two
 *
 *    n: 1, 2, 3, 4, 5, 6, 7, 8
 * fib(n) 1, 1, 2, 3, 5, 8, 13, 21
 */

const fib = (n) => {
  base: if (n <= 2) return 1

  return fib(n - 1) + fib(n - 2)
  // return fib(5)
}

console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
