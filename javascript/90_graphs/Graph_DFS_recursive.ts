//* -> Recursive DFS Graph
let graphAdjacencyList2: {
  a: string[]
  b: string[]
  c: string[]
  d: string[]
  e: string[]
  f: string[]
}

const depthFirstPrint2 = (graph, source) => {
  console.log(source)
  //-> recursive base case is implicit
  //-> _when the array (no neighbors) is empty the loop stops

  for (let neighbor of graph[source]) {
    depthFirstPrint2(graphAdjacencyList2, neighbor)
  }
}

graphAdjacencyList2 = {
  a: ['a', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: ['g'],
  f: [],
}

// depthFirstPrint2(graphAdjacencyList, 'a')
