// class minheap {
//   constructor(arr) {
//     this.heap = [...arr];
//     this.buildheap();
//   }
//   buildheap() {
//     for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
//       this.shiftdown(i);
//     }
//   }
//   parent(i) {
//     return Math.floor((i - 1) / 2);
//   }
//   leftchild(i) {
//     return i * 2 + 1;
//   }
//   rightchild(i) {
//     i * 2 + 2;
//   }
//   shiftdown(i) {
//     let leftindex = this.leftchild(i);
//     let endindex = this.heap.length - 1;
//     while (leftindex <= endindex) {
//       let shiftindex = leftindex;
//       let rightindex = this.rightchild(i);
//       if (rightindex <= endindex) {
//         if (this.heap[rightindex] < this.heap[leftindex]) {
//           shiftindex = rightindex;
//         }
//       }
//       if (this.heap[i] > this.heap[shiftindex]) {
//         this.swap(i, shiftindex);
//         i = shiftindex;
//         leftindex = this.leftchild(i);
//       } else {
//         return;
//       }
//     }
//   }
//   remove() {
//     this.swap(this.heap[0], this.heap.length - 1);
//     this.heap.pop();
//     this.shiftdown(0);
//   }
//   insert(value) {
//     this.heap.push(value);
//     this.shiftup(this.heap.length - 1);
//   }
//   shiftup(index) {
//     let parentindex = this.parent(index);
//     while (parentindex >= 0) {
//       if (this.heap[parentindex] > this.heap[index]) {
//         this.swap(parentindex, index);
//         index = parentindex;
//         parentindex = this.parent(index);
//       } else {
//         return;
//       }
//     }
//   };
//   heapSort() {
//     var lastElement = this.heap.length-1;

//     while (lastElement >= 0) {
//       var swap = this.heap[lastElement];
//       this.heap[lastElement] = this.heap[0];
//       this.heap[0] = swap;

//       lastElement--;
//       this.heap.length--;
//       this.buildheap();
//     }
//   }
//   swap(index1, index2) {
//     let temp = this.heap[index1];
//     this.heap[index1] = this.heap[index2];
//     this.heap[index2] = temp;
//   }
//   display() {
//     for (let i = 0; i < this.heap.length; i++) {
//       console.log(this.heap[i]);
//     }
//   }
// }
// let arr=[89,7,90,45,700,900]

// let obj = new minheap(arr);
// obj.insert(10);
// obj.insert(200)
// obj.insert(20);
// obj.insert(30);
// obj.insert(40);
// obj.insert(50);
// obj.insert(100)

// // obj.remove()
// obj.display();


class trienode{
  constructor(){
    this.children={};
    this.isEndofword=false;
  }
}
class trie{
  constructor(){
    this.root=new trienode()
  }
  insert(word){
    let node=this.root;
    for(let char of word){
      if(!node.children[char]){
        node.children[char]=new trienode()
      }
      node=node.children[char]
    }
    node.isEndofword=true;
  }
  search(word){
    let node=this.root;
    for(let char of word){
      if(!node.children[char]){
        return false;
      }
      node=node.children[char]
    }
    return node.isEndofword=true
  }
  startswith(prefix){
    let node=this.root;
    for(let char of prefix){
      if(!node.children[char]){
        return false
      }
      node=node.chidren[char]
    }
    return true;
  }
}
const obj=new trie();
obj.insert("haii");
console.log(obj.startswith("ha"))
