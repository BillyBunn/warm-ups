'use strict';

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.size = 0;
  }

  addVertex(v) {
    this.adjacencyList.set(v, []);
    this.size++;
  }

  addDirectedEdge(src, vertex, weight = null) {
    let edge = {vertex, weight};
    this.adjacencyList.get(src).push(edge);
  }

  addUndirectedEdge(start, end, weight) {
    this.addDirectedEdge(start, end, weight);
    this.addDirectedEdge(end, start, weight);
  }
}
let graph = new Graph();
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');
graph.addVertex('e');
graph.addUndirectedEdge('a', 'b', 10);
graph.adjacencyList; //?


graph;
