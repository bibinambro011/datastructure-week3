// class graph{
//     constructor(){
//         this.adjacencylist={}
//     };
//     addvertex(vertex){
//         if (!this.adjacencylist[vertex]) {
//             this.adjacencylist[vertex] = new Set();
//           }
//         }
//     addedge(vertex1,vertex2){

//         if(!this.adjacencylist[vertex1]){
//             this.addvertex(vertex1)
//         }
//         if(!this.adjacencylist[vertex2]){
//             this.addvertex(vertex2)
//         }
//         this.adjacencylist[vertex1].add(vertex2);
//         this.adjacencylist[vertex2].add(vertex1);
    
//     }
//     removeedge(vertex1,vertex2){
//         this.adjacencylist[vertex1].delete(vertex2);
//         this.adjacencylist[vertex2].delete(vertex1)
//     }
//     removevertex(vertex){
//         if(!this.adjacencylist[vertex]){
//             return null;
//         }else{
//             for(let x of this.adjacencylist[vertex]){
//                 this.removeedge(vertex,x)
//             }
//         }
//         delete this.adjacencylist[vertex]
//     };
//     display(){
//         for(let x in this.adjacencylist){
//             console.log(x + "---> " + [...this.adjacencylist[x]]);
//         }
//     }
// }

// let obj=new graph();
// obj.addvertex("A");
// obj.addvertex("B");
// obj.addvertex("C");
// obj.addedge("A","B");
// obj.addedge("A","C");
// obj.removevertex("B")
// obj.display()

class Maxheap {
    constructor(arr) {
        this.heap = [...arr] 
        this.size=this.heap.length-1
        this.buildHeap()
    }

    buildHeap() {
        for (let i = this.parent(this.size); i >= 0; i--) {
            this.shiftdown(i) 
        }
    }

    shiftdown(i) {
        let endind = this.size
        let leftind = this.leftchild(i)

        while (leftind <= endind) {
            let shiftind = leftind
            let rightind = this.rightchild(i)
            if (rightind <= endind) {
                if (this.heap[leftind] < this.heap[rightind]) {
                    shiftind = rightind
                }
            }

            if (this.heap[i] < this.heap[shiftind]) {
                this.swap(i, shiftind)
                i = shiftind
                leftind = this.leftchild(i)
            } else {
                return  ;
            }
        }
    }

    shiftup(i) {
        let parent = this.parent(i)
        while (i >= 0 && this.heap[parent] < this.heap[i]) {
            this.swap(parent, i)
            i = parent
            parent = this.parent(i)

        }
    }

    heapSort() {
        while (this.size >= 0) {
          this.swap(this.size, 0);
          this.size--;
          this.buildHeap()
    }
  }

    insert(vlaue) {
        this.heap.push(vlaue)
        this.shiftup(this.heap.length - 1)
    }

    remove() {
        this.swap(0, this.heap.length - 1)
        this.heap.pop()
        this.shiftdown(0)
    }

    peek() {
        console.log(this.heap[0]);
    }

    swap(ind1, ind2) {
        let temp = this.heap[ind1]
        this.heap[ind1] = this.heap[ind2]
        this.heap[ind2] = temp
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }
    leftchild(i) {
        return (i * 2) + 1
    }
    rightchild(i) {
        return (i * 2) + 2
    }

    display() {
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i]);
        }
    }
}

let arr = [12, 56, 87, 6, 48, 2, 3, 4, 5]
let max = new Maxheap(arr) 
// max.heapSort()
max.display()