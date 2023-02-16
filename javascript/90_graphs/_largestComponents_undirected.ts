//* largest components

//! ENTITY: LARGEST | COUNT | NODE | VISITED

const largestComponent = (graph) => {
  let longest = 0
  for (let node in graph) {
    const size = exploreSize(graph, node)
    if (size > longest) longest = size
  }
  return longest
}
