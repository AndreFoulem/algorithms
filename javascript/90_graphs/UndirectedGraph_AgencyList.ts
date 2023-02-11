// @ts-nocheck

class UndirectedGraph_AgencyList {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    )
  }
}

let graph = new UndirectedGraph_AgencyList()
graph.addVertex('San Francisco')
graph.addVertex('Turin')
graph.addVertex('New York')
graph.addEdge('San Francisco', 'Turin')
graph.removeEdge('San Francisco', 'Turin')

console.log(graph)
