// @ts-nocheck

class UndirectedGraph_AgencyList {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }
}
