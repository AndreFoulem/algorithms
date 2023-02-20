//* Grid traveler -> Dimension: Tuple (x,y)

const gridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n
  if (key in memo) return memo[key]

  trip: if (m === 1 && n === 1) return 1
  invalid: if (m === 0 || n === 0) return 0

  // -> return [ down ] + [ right ]
  memo[key] = gridTraveler(m - 1, n) + gridTraveler(m, n - 1)
  return memo[key]
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(3, 3))

/**
 * Complexity - Brute Force - (binary tree)
 * HEIGHT: (2,3) -> 4
 * TIME: O(2n+m)
 * SPACE: P(n+M)
 */

/**
 * Complexity - Memo - ** grid(a,b) == grid(b,a)
 */
