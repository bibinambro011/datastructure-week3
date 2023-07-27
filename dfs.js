class Graph {
    constructor() {
        this.graph = {};
    }

    addEdge(vertex1, vertex2) {
        if (!this.graph[vertex1]) {
            this.addVertex(vertex1);
        }

        if (!this.graph[vertex2]) {
            this.addVertex(vertex2);
        }

        this.graph[vertex1].add(vertex2);
        this.graph[vertex2].add(vertex1);
    }

    addVertex(vertex) {
        if (!this.graph[vertex]) {
            this.graph[vertex] = new Set();
            return true;
        }
        return false;
    }

    display() {
        for (const vertex in this.graph) {
            console.log(vertex + " -> " + [...this.graph[vertex]]);
        }
    }

    removeVertex(vertex) {
        for (const key in this.graph) {
            if (this.graph[key].has(vertex)) {
                this.removeEdge(key, vertex);
            }
        }

        delete this.graph[vertex];
    }

    removeEdge(vertexFrom, vertexTo) {
        if (this.graph[vertexFrom].has(vertexTo)) {
            this.graph[vertexFrom].delete(vertexTo);
        }

        if (this.graph[vertexTo].has(vertexFrom)) {
            this.graph[vertexTo].delete(vertexFrom);
        }
    }



    depthFirstSearch(context) {
        var stack = [];
        var visited = new Set();
        var result = [];



        stack.push(context)
        visited.add(context);

        while (stack.length) {

            var pop = stack.pop();
            result.push(pop);

            var adjusentValue = this.graph[pop];
            for (const iterator of adjusentValue) {
                if (!visited.has(iterator)) {
                    stack.push(iterator);
                    visited.add(iterator);
                }
            }
        }

        return result;
    }

    breadthFirstSearch(context) {
        var queue = [];
        var result = [];
        var visited = new Set();

        queue.push(context);
        visited.add(context);

        while (queue.length) {
            var shift = queue.shift();
            result.push(shift);

            var sibiling = this.graph[shift];
            for (const iterator of sibiling) {
                if (!visited.has(iterator)) {
                    queue.push(iterator);
                    visited.add(iterator)
                }
            }
        }

        return result;
    }



    findShortestPath() { }

    checkCycle() { }

    checkConnectivity(vertex1, vertex2) {
        if (this.graph[vertex1].has(vertex2)) {
            return true;
        }

        return false;
    }
}

// Example usage
var myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addVertex("E");
myGraph.addVertex("F");
myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");
myGraph.addEdge("B", "E");
myGraph.addEdge("C", "F");


console.log(myGraph.breadthFirstSearch("A"));
