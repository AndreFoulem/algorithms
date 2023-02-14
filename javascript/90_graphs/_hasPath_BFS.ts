//* Has Path? w/ acyclic
//* -> Problem: Can we move to source F to destination K node.

//? Iterative -> Stack
//? Recursive -> Queue

//* A) Depth First

/**
 *   (F) to  (G)  to (H)
 *   to
 *   (i) from (j)
 *   to
 *   (K)
 */

//& - ENTITY: GRAPH | SOURCE | DESTINATION | NEIGHBOURS
let graphAcyclical: {
  a: string[]
  b: string[]
  c: string[]
  d: string[]
  e: string[]
  f: string[]
  g: string[]
}
graphAcyclical = {
  a: ['a', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: ['g'],
  f: [],
  g: [],
}

const hasPath = (graph, src, dst) => {
  //* Source is my guard base case
  if (src === dst) return true

  for (let neighbor of graph[src]) {
    // ex:1  let F of array
    // call recursively
    if (hasPath(graph, neighbor, dst) === true) {
      return true
    }
  }

  //* return false if not winning path
  return false
}

// console.log(hasPath(graphAcyclical, 'a', 'e'))
