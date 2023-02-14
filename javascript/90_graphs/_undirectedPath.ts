// const graphUndirected = {
//   i: ['j', 'k'],
//   j: ['i'],
//   k: ['i', 'm', 'l'],
//   m: ['k'],
//   l: ['l'],
//   o: ['n'],
//   n: ['o'],
// }

/**
 *   i - j
 *   to +
 *   k - l
 *   to
 *   m
 *
 *   o - n
 */

//& entity: graph | src | dist | neighbor | visited
//* src: i    dist: l

//* 1 -> modify edges obj to Adjancy list
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]

const buildGraph = (edges) => {
  const graph = {}

  for (let edge of edges) {
    const [a, b] = edge

    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []

    graph[a].push(b)
    graph[b].push(a)
  }

  return graph
}

//* 2 Implement a depth first traversal
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
}

undirectedPath(edges, 'i', 'l')
