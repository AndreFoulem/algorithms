let graphAdjacencyList: {
  a: string[]
  b: string[]
  c: string[]
  d: string[]
  e: string[]
  f: string[]
}

const depthFirstPrint = (graph, source) => {
  const stack = [source]

  while (stack.length > 0) {
    // 1 -> pop stack + mark it
    const current = stack.pop()
    console.log('cur', current)

    // 2 -> assign neighbours to stack
    for (let neighbour of graph[current]) {
      stack.push(neighbour)
    }
  }
}

const depthFirstPrint2 = (graph, source) => {
  console.log(source)
  //-> recursive base case is implicit
  //-> _when the array (no neighbors) is empty the loop stops

  for (let neighbor of graph[source]) {
    depthFirstPrint2(graphAdjacencyList, neighbor)
  }
}

graphAdjacencyList = {
  a: ['a', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: ['g'],
  f: [],
}

// depthFirstPrint2(graphAdjacencyList, 'a')
