//* Grid traveler -> Dimension: Tuple (x,y)

//* MEMO STEPS
//* 1: Init memo obj
//* 2: Pass args into key
//* 3: If key is in memo return the cached memo
//* 4: Add the recursion to the memo[key] + pass memo ref into recursions as params
//* 5: return memo[key]

const gridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n
  if (key in memo) return memo[key]

  trip: if (m === 1 && n === 1) return 1
  invalid: if (m === 0 || n === 0) return 0

  // -> return [ down ] + [ right ]
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
  return memo[key]
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(18, 18))

/**
 * Complexity - Brute Force - (binary tree)
 * HEIGHT: (2,3) -> 4
 * TIME: O(2n+m)
 * SPACE: P(n+M)
 */

/**
 * Complexity - Memo - ** grid(a,b) == grid(b,a)
 * TIME: O(m*n)
 * SPACE: O(n+m)
 */
