class graph {
  constructor() {
    this.adjacencylist = {};
  }
  bfs(root) {
    let que = [];
    let visited = new Set();
    let result = [];

    que.push(root);
    visited.add(root);

    while (que.length) {
      let pop = que.shift();
      result.push(pop);

      for (const key of this.adjacencylist[pop]) {
        if (!visited.has(key)) {
          que.push(key);
          visited.add(key);
        }
      }
    }
    return result;
  }
  bfs(root) {
    let que = [];
    let visited = new Set();
    let result = [];

    que.push(root);
    visited.add(root);

    while (que.length) {
      let pop = que.shift();
      result.push(pop);

      for (const key of this.adjacencylist[pop]) {
        if (!visited.has(key)) {
          que.push(key);
          visited.add(key);
        }
      }
    }
    return result;
  }
  dfs(root) {
    let stack = [];
    let visited = new Set();
    let result = [];

    stack.push(root);
    visited.add(root);

    while (stack.length) {
      let pop = stack.pop();
      result.push(pop);

      for (const key of this.adjacencylist[pop]) {
        if (!visited.has(key)) {
          stack.push(key);
          visited.add(key);
        }
      }
    }
    return result;
  }
  addVertex(vertex) {
    if (!this.adjacencylist[vertex]) {
      this.adjacencylist[vertex] = new Set();
    }
  }
  display() {
    for (let vertex in this.adjacencylist) {
      console.log(vertex + "---> " + [...this.adjacencylist[vertex]]);
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencylist[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencylist[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencylist[vertex1].add(vertex2);
    this.adjacencylist[vertex2].add(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencylist[vertex1].delete(vertex2);
    this.adjacencylist[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencylist[vertex]) {
      return null;
    } else {
      for (let adjacency of this.adjacencylist[vertex]) {
        this.removeEdge(vertex, adjacency);
      }
    }
    delete this.adjacencylist[vertex];
  }
}
let obj = new graph();
obj.addVertex("A");
obj.addVertex("B");
obj.addVertex("c");
obj.addVertex("D");
obj.addEdge("A", "B");
obj.addEdge("B", "c");

console.log(obj.dfs("A"));
