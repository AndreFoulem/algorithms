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

const hasPath = (graph, src, dst) => {
  //* Source is my guard base case
  if (src === dst) return true

  for (let neighbor of graph[src]) {
    // ex:1  let F of array
    // call recursively
    if (hasPath(graph, neighbor, dst) == true) {
      return true
    }
  }

  //* return false if not winning path
  return false
}
