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

const islandCount = (grid) => {
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      explore(grid, r, c)
    }
  }
}
