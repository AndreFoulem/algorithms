export {}
//* Grid graph (row, col)

// * Looking for neighbors - removing 1 from rows or columns

//* TIME: 0(rc)
//* SPACE: 0(rc)

/**
 *               (r-1, c)
 *   (r, c-1)    [r,c]     (r, c+1)
 *               (r+1,c)
 */

//? ENTITY: VISITED | NEIGHBORS | COLS | ROWS | ISLAND_COUNT
//! position == node

const islandCount = (grid) => {
  const visited = new Set()

  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      explore(grid, r, c, visited)
    }
  }
}

const explore = (grid, r, c, visited) => {
  //
  const rowInbounds = 0 <= r && r < grid.length
  const colInbounds = 0 <= r && r < grid.length
  if (!rowInbounds || !colInbounds) return false

  if (grid[r][c] === 'w') return false
  const pos = r + ',' + c

  if (visited.has(pos)) return false
  visited.add(pos)

  //-> I'm here at unvisited land
  explore(grid, r - 1, c, visited)
  explore(grid, r + 1, c, visited)
  explore(grid, r, c - 1, visited)
  explore(grid, r, c + 1, visited)

  return true
}
