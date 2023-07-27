// class Node {
//   constructor(value) {
//     this.left = null;
//     this.right = null;
//     this.value = value;
   
//   }
// }
// class binary {
//   constructor() {
//     this.root = null;
//     this.arr=[]
//   }
//   insert(value) {
//     let node = new Node(value);
//     if (this.root == null) {
//       this.root = node;
//     } else {
//       this.insertNode(this.root, node);
//     }
//   }
//   insertNode(root, node) {
//     if (node.value < root.value) {
//       if (root.left == null) {
//         root.left = node;
//       } else {
//         this.insertNode(root.left, node);
//       }
//     } else {
//       if (node.value > root.value) {
//         if (root.right == null) {
//           root.right = node;
//         } else {
//           this.insertNode(root.right, node);
//         }
//       }
//     }
//   }
//   inorder(root) {
//     if (root) {
//       this.inorder(root.left);
//       console.log(root.value);
//       this.inorder(root.right);
//     }
//   }
//   preorder(root) {
//     if (root) {
//       console.log(root.value);
//       this.preorder(root.left);
//       this.preorder(root.right);
//     }
//   }
//   postorder(root) {
//     if (root) {
//       this.postorder(root.left);
//       this.postorder(root.right);
//       console.log(root.value);
//     }
//   }
//   validateBST(root = this.root, min = -Infinity, max = +Infinity) {
//     if (root === null) {
//       return true;
//     }
//     if (root.value >= max || root.value <= min) return false;

//     return (
//       this.validateBST(root.left, min, root.value) &&
//       this.validateBST(root.right, root.value, max)
//     );
//   }
//   levelorder(root) {
//     let que = [];
//     que.push(root);

//     while (que.length) {
//       let curr = que.shift();
//       console.log(curr.value);
//       if (curr.left) {
//         que.push(curr.left);
//       }
//       if (curr.right) {
//         que.push(curr.right);
//       }
//     }
//   }
//   min(root) {
//     if (!root.left) {
//       return root.value;
//     } else {
//       return this.min(root.left);
//     }
//   }
//   max(root) {
//     if (!root.right) {
//       return root.value;
//     }
//     return this.max(root.right);
//   }
//   search(root,value){
//     if(!root){
//         return null
//     }
//     if(root.value==value){
//         return value;
//     }
//     else if(value<root.value){
//       return  this.search(root.left,value)
//     }
//     else if(value>root.value){
//        return this.search(root.right,value)
//     }
//   }
// }
// let obj = new binary();
// obj.insert(10);
// obj.insert(20);
// obj.insert(30);
// obj.insert(1);
// obj.insert(2);
// // obj.preorder(obj.root);
// // console.log(obj.min(obj.root));
// // console.log(obj.validateBst(obj.root))
// // console.log(obj.search(obj.root,20));
// console.log(obj.validateBST())


class maxheap{
    constructor(){
        this.heap=[];
        this.size=this.heap.length-1;
        this.buildheap()
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    leftchild(i){
        return i*2+1;
    }
    rightchild(i){
       return i*2+2;
    }
    shiftdown(i){
        let leftindex=this.leftchild(i);
        let endindex=this.heap.length-1;
        while(leftindex<=endindex){
            let shiftindex=leftindex
            let rightindex=this.rightchild(i)
            if(rightindex<=endindex){
            if(this.heap[rightindex]>this.heap[leftindex]){
                shiftindex=rightindex;
            }
        }
            if(this.heap[i]<this.heap[shiftindex]){
                this.swap(i,shiftindex)
                i=shiftindex;
                leftindex=this.leftchild(i)
            }else{
                return ;
            }
        }
    }
    swap(parent,child){
        let temp=this.heap[parent];
        this.heap[parent]=this.heap[child];
        this.heap[child]=temp;
    }
    buildheap(){
        for(let i=this.parent(this.length-1);i>=0;i--){
            this.shiftdown(i)
        }
    }
    insert(value){
        this.heap.push(value);
        this.shiftup(this.heap.length-1);
        this.size++
        
    }
    shiftup(i){
        let parent=this.parent(i);
        while(parent>=0){
            if(this.heap[parent]<this.heap[i]){
                this.swap(i,parent)
                i=parent;
                parent=this.parent(i)

            }else{
                return
            }
        }
    }
    heapsort(){
        while(this.size>=0){
            this.swap(this.size,0)
            this.size--;
            this.buildheap()
        }
    }
    display(){
        for(let i=0;i<this.heap.length;i++){
            console.log(this.heap[i]);
        }
    }

}
let obj=new maxheap();
obj.insert(10)
obj.insert(20);
obj.insert(90);
obj.insert(22);
obj.insert(2);
obj.insert(200)
obj.heapsort()
obj.display()