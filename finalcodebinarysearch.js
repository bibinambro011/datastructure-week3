class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class binary {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (node.value > root.value) {
        if (root.right == null) {
          root.right = node;
        } else {
          this.insertNode(root.right, node);
        }
      }
    }
  }
  min(root){
    if(!root.left){
        return root.value;
    }else{
        return this.min(root.left);
    }
  }
  max(root){
    if(!root.right){
        return root.value
    }else{
       return this.max(root.right);
    }
  }
  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }
  preorder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }
  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }
 levelsearch(root){
    let que=[];
    que.push(root);
    while(que.length){
        let curr=que.shift();
        console.log(curr.value)
        if(curr.left){
            que.push(curr.left)
        }if(curr.right){
            que.push(curr.right)
        }
    }
 }
}
obj = new binary();
obj.insert(10);
obj.insert(2);
obj.insert(30);
obj.insert(40);
obj.insert(22);
obj.insert(33);
obj.inorder(obj.root);
console.log("pre-order");
obj.preorder(obj.root);
console.log("post-order");
obj.postorder(obj.root);
console.log("levelsearch")
obj.levelsearch(obj.root);
console.log("min");
console.log(obj.min(obj.root))
