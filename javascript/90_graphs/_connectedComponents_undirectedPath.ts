//* -> How many undirected connected components (graph region)

//* ENTITY:  Count | Nodes | Visited

const connectedComponentCount = (graph) => {
  const visited = new Set()

  for (let node in graph) {
    explore(graph, node, visited)
  }
}

const explore = (graph, current, visited) => {
  if (visited.has(current)) return false

  visited.add(current)

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited)
  }

  return true
}
