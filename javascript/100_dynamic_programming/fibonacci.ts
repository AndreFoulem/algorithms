//* Fibonacci
//& YT 23

/**
 *  Write a function <fib(n)> that takes in a number as an argument. int(number) and returns the n-th number of the fibonacci sequence
 *
 *  The 1st and 2nd number of the sequence is 1.
 *  To generate the next number of the sequence, we sum the previous two
 *
 *    n: 1, 2, 3, 4, 5, 6, 7, 8
 * fib(n) 1, 1, 2, 3, 5, 8, 13, 21
 */

//* ADD Memoization -> use Object: keys will be arg to fn / value is return value

const fib = (n, memo = {}) => {
  check_memo: if (n in memo) return memo[n]

  base_1: if (n < 2) return n

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

console.log(fib(50))
