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

const depthFirstPrint2 = (graph, source) => {}

graphAdjacencyList = {
  a: ['a', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: ['g'],
  f: ['c'],
}
