//* largest components

//! ENTITY: LARGEST | COUNT | NODE | VISITED

const largestComponent = (graph) => {
  const visited = new Set()
  let longest = 0
  for (let node in graph) {
    const size = exploreSize(graph, node, visited)
    if (size > longest) longest = size
  }
  return longest
}

const exploreSize(graph, node, visited) => {
  //* if doesn't exist returns 0
  if (visited.has(node)) return 0
  
  //* if exist add to visited
  visited.add(node)

  //* count the first node
  let size = 1;
  //* neighbor is node adjancent array
  for (let neighbor of graph[node]) {
    //* will accumulate to size
   size += exploreSize(graph, neighbor, visited)
  }

  return size;

}