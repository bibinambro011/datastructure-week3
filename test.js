// // // class Node{
// // //     constructor(value){
// // //         this.value=value;
// // //         this.left=null;
// // //         this.right=null;
// // //     }
// // // }
// // // class binary{
// // //     constructor(){
// // //         this.root=null;
// // //     };

// // //     isEmpty(){
// // //         return this.root===null;
// // //     };
// // //     insert(value){
// // //         let node=new Node(value)
// // //         if(this.isEmpty()){
// // //             this.root=node;
// // //         }else{
// // //             this.insertnode(this.root,node)
// // //         }
// // //     }
// // //     insertnode(root,node){
// // //         if(node.value<root.value){
// // //             if(root.left==null){
// // //                 root.left=node;
// // //             }else{
// // //                 this.insertnode(root.left,node)
// // //             }
// // //         }else{
// // //             if(root.right===null){
// // //                 root.right=node
// // //             }else{
// // //                 this.insertnode(root.right,node)
// // //             }
// // //         }
// // //     }
// // //     search(root,value){
// // //         if(!root){
// // //             return null;
// // //         }else{
// // //         if(value===root.value){
// // //             return value;
// // //         }else if(value<root.value){
// // //             return this.search(root.left,value);
// // //         }else{
// // //            return this.search(root.right,value)
// // //         }
// // //     }
// // // }
// // // preorder(root){
// // //     if(root){
// // //         console.log(root.value);
// // //         this.preorder(root.left);
// // //         this.preorder(root.right)
// // //     }
// // // };
// // // inorder(root){
// // //     if(root){
// // //         this.inorder(root.left);
// // //         console.log(root.value);
// // //         this.inorder(root.right);
// // //     }

// // // };
// // // postorder(root){
// // //     if(root){
// // //         this.postorder(root.left);
// // //         this.postorder(root.right);
// // //         console.log(root.value)
// // //     }
// // // };
// // // remove(value){

// // // }
// // // levelsearch(root){
// // //     let que=[];
// // //     que.push(root);
// // //     while(que.length){
// // //         let curr=que.shift();
// // //         console.log(curr.value);
// // //         if(curr.left){
// // //             que.push(curr.left)
// // //         }
// // //         if(curr.right){
// // //             que.push(curr.right)
// // //         }
// // //     }
// // // };
// // // min(root){
// // //     if(!root.left){
// // //         return root.value
// // //     }else{
// // //        return this.min(root.left);
// // //     }
// // // };
// // // max(root){
// // //     if(!root.right){
// // //         return root.value
// // //     }else{
// // //         return this.max(root.right)
// // //     }
// // // }

// // // }
// // // let obj=new binary();
// // // obj.insert(10);
// // // obj.insert(8);
// // // obj.insert(9);
// // // obj.insert(3);
// // // obj.insert(15);
// // // obj.insert(100);
// // // obj.postorder(obj.root)

// // // class graph{
// // //     constructor(){
// // //         this.adjacencylist={};
// // //     }
// // //     insert(value){
// // //         if(!this.adjacencylist[value]){
// // //             this.adjacencylist[value]=new Set()
// // //         }
// // //     }
// // //     addedge(vertex1,vertex2){
// // //         if(!this.adjacencylist[vertex1]){
// // //             this.insert(vertex1)
// // //         }
// // //         if(!this.adjacencylist[vertex2]){
// // //             this.insert(vertex2)
// // //         }
// // //         this.adjacencylist[vertex1].add(vertex2);
// // //         this.adjacencylist[vertex2].add(vertex1);
// // //     }
// // //     removeedge(vertex1,vertex2){
// // //         this.adjacencylist[vertex1].delete(vertex2);
// // //         this.adjacencylist[vertex2].delete(vertex2)
// // //     }
// // //     removeVertex(vertex1){
// // //         if(!this.adjacencylist[vertex1]){
// // //             return null
// // //         }else{
// // //             for(let x of this.adjacencylist[vertex1]){
// // //                this.removeVertex(x,vertex1)
// // //             }
// // //         }
// // //         delete this.adjacencylist[vertex1]
// // //     }
// // //     display(){
// // //         for(let x of this.adjacencylist){
// // //             console.log(x + "---> " + [...this.adjacencylist[x]]);
// // //         }
// // //     }

// // // }
// // // let obj=new graph();
// // // obj.insert("A");
// // // obj.insert("B");
// // // obj.insert("C");
// // // obj.addedge("A","B");
// // // obj.display()

// // // class TrieNode{
// // //     constructor(){
// // //         this.children={};
// // //         this.isendofword=false;
// // //     }
// // // }
// // // class trie{
// // //     constructor(){
// // //         this.root=new TrieNode()
// // //     }
// // //     insert(word){
// // //         let node=this.root;
// // //         for(let x of word){
// // //             if(!node.children[x]){
// // //                 node.children[ x]=new TrieNode()
// // //             }
// // //             node=node.children[x]
// // //         }
// // //         node.isendofword=true;
// // //     }
// // //     search(word){
// // //         let node=this.root;
// // //         for(let x of word){
// // //             if(!node.childre[x]){
// // //                 return false;
// // //             }
// // //             node=node.children[x]
// // //         }
// // //         return node.isendofword;
// // //     }
// // //     prefix(word){
// // //         let node=this.root;
// // //         for(let char of word){
// // //             if(!node.children[char]){
// // //                 return false;
// // //             }
// // //             node=node.children[char]
// // //         }
// // //         return true
// // //     }
// // // }
// // // let obj=new trie();
// // // obj.insert("bibin");
// // // obj.insert("baiju");
// // // console.log(obj.search("baiju"))

// // // isvalidate(root=this.root,min=-Infinity,max=+infinity){
// // //     if(root==null){
// // //         return true;
// // //     }
// // //     if(root.value<min || root.value>min) return false;
// // //     return( validateBST(root.left,min,root.value)&&
// // //     validateBST(root.right,root.value,max))

// // // }

// // // validateBST(root = this.root, min = -Infinity, max = +Infinity) {
// // //     if (root === null) {
// // //       return true;
// // //     }
// // //     if (root.value >= max || root.value <= min) return false;

// // //     return (
// // //       this.validateBST(root.left, min, root.value) &&
// // //       this.validateBST(root.right, root.value, max)
// // //     );
// // //   }

// // // function bfs(root){
// // //     let que=[];
// // //     let visited=new Set();
// // //     let result=[]
// // //     que.push(root);
// // //     visited.add()
// // //     while(que.length){
// // //         let pop=que.shift();
// // //          result.push(pop);
// // //          for(const key of this.adjacencylist[pop]){

// // //          }
// // //     }

// // // }

// // class Node {
// //   constructor(value) {
// //     this.left = null;
// //     this.right = null;
// //     this.value = value;
// //   }
// // }
// // class binary {
// //   constructor() {
// //     this.root = null;
// //   }
// //   insert(value) {
// //     let node = new Node(value);
// //     if (this.root == null) {
// //       this.root = node;
// //     } else {
// //       this.insertNode(this.root, node);
// //     }
// //   }
// //   insertNode(root, node) {
// //     if (node.value < root.value) {
// //       if (root.left == null) {
// //         root.left = node;
// //       } else {
// //         this.insertNode(root.left, node);
// //       }
// //     } else {
// //       if (root.right == null) {
// //         root.right = node;
// //       } else {
// //         this.insertNode(root.right, node);
// //       }
// //     }
// //   }
// //   leveloerder(root) {
// //     let que = [];
// //     que.push(root);
// //     while (que.length) {
// //       let curr = que.shift();
// //       console.log(curr.value);
// //       if (curr.left) {
// //         que.push(curr.left);
// //       }
// //       if (curr.right) {
// //         que.push(curr.right);
// //       }
// //     }
// //   }
// //   validateBst(root = this.root, min = -Infinity, max = +Infinity) {
// //     if (root == null) {
// //       return true;
// //     }
// //     if (root.value <= min || root.value >= max) return false;
// //     return (
// //       this.validateBst(root.left, min, root.value) &&
// //       this.validateBst(root.right, root.value, max)
// //     );
// //   }
// //   preorder(root) {
// //     if (root) {
// //       this.preorder(root.left);
// //       console.log(root.value);
// //       this.preorder(root.right);
// //     }
// //   }
// // }
// // let obj = new binary();
// // obj.insert(100);
// // obj.insert(200);
// // obj.insert(300);
// // obj.insert(340);
// // obj.insert(50);
// // obj.insert(33);
// // obj.insert(45);
// // obj.insert(500);
// // obj.leveloerder(obj.root);
// // // console.log(obj.validateBst())
// // // obj.preorder(obj.root)


// class trienode{
//     constructor(){
//         this.childnode={}
//         this.isEndOfword=false
//     }
// }
// class trie{
//     constructor(){
//         this.root=new trienode()
//     }
//     insert(word){
//         let node=this.root;
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new trienode()
//             }
//             node=node.children[char]
//         }
//         this.isEndOfword=true;
//     }
    
//     search(word){
//         let node=this.root;
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return this.isEndOfword
//     }

//     prefix(word){
//         let node=this.root;
//         for(let char of word){
//             if(!node.children[char]){
//                 return false;
//             }
//             node=node.children[char]
//         }
//         return true;
//     }
// }

function add(num){
    let sum=0;
    for(let i=2;i<=Math.ceil(num/2);i++){
        if(num%i==0){
            sum+=i;
        }
    }
    if(sum+1==num){
        return true;
    }else{
        return false;
    }
}
console.log(add(28))