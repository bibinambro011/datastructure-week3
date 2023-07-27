class MyGraph {
  constructor() {
    this.graph = {};
  }

  display() {
    for (const key in this.graph) {
      console.log(`${key}: ${[...this.graph[key]]}`); // iterate through the properties of an
    }
  }

  bfs(root) {
    var queue = [];
    var visited = new Set();
    var result = [];

    queue.push(root);
    visited.add(root);

    while (queue.length) {  
      var pop = queue.shift();
      result.push(pop);

      for (const key of this.graph[pop]) {
        if (!visited.has(key)) {
          queue.push(key);      
          visited.add(key);
        }
      }
    }

    return result;
  }

  addEdge(vertex, vertex2) {
    if (!this.graph[vertex]) {
      this.addVertex(vertex);
    }

    if (!this.graph[vertex2]) {
      this.addVertex(vertex2);
    }

    this.graph[vertex].add(vertex2);
    this.graph[vertex2].add(vertex);
  }

  addVertex(vertex) {
    if (!this.graph[vertex]) {
      this.graph[vertex] = new Set();
      return true;
    }
    return false;
  }
}

var graph = new MyGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "E");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
console.log(graph.bfs("A"));
