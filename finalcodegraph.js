class graph{
    constructor(){
        this.adjacencylist={};

    }
    addvertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex]=new Set();
        }
    }
    addedges(vertex1,vertex2){
        if(!this.adjacencylist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjacencylist[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjacencylist[vertex1].add(vertex2);
        this.adjacencylist[vertex2].add(vertex1);
    }
    removeedge(vertex1,vertex2){
        this.adjacencylist[vertex1].delete(vertex2);
        this.adjacencylist[vertex2].delete(vertex1);
    }
    removevertex(vertex){
        for(let x of this.adjacencylist[vertex]){
            this.removeedge(vertex,x)
        }
        delete this.adjacencylist[vertex]
    };
    bfs(root){
        let que=[];
        let visited=new Set();
        let result=[];
        que.push(root);
        visited.add(root);
        while(que.length){
            let pop=que.shift();
            result.push(pop);
        for(let x of this.adjacencylist[pop]){
            if(!visited.has(x)){
                que.push(x);
                visited.add(x)
            }
        }
        }
        return result;
    }
    display(){
        for(let x in this.adjacencylist){
            console.log(x + "---> " + [...this.adjacencylist[x]]);
        }
    }
}
let obj=new graph();
obj.addvertex("A");
obj.addvertex("B");
obj.addvertex("C");
obj.addvertex("D");
obj.addvertex("E");
obj.addvertex("F");
obj.addedges("A","B");
obj.addedges("A","C")
obj.addedges("B","D");
obj.display();
console.log(obj.bfs("A"));
 



