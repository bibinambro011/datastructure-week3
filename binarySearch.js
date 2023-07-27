class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class binary{
    constructor(){
        this.root=null;
    };

    isEmpty(){
        return this.root===null;
    };
    insert(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.root=node;
        }else{
            this.insertnode(this.root,node)
        }
    }
    insertnode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node;
            }else{
                this.insertnode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertnode(root.right,node)
            }
        }
    }
    search(root,value){
        if(!root){
            return null;
        }else{
        if(value===root.value){
            return value;
        }else if(value<root.value){
            return this.search(root.left,value);
        }else{
           return this.search(root.right,value)
        }
    }
}
preorder(root){
    if(root){
        console.log(root.value);
        this.preorder(root.left);
        this.preorder(root.right)
    }
};
inorder(root){
    if(root){
        this.inorder(root.left);
        console.log(root.value);
        this.inorder(root.right);
    }
   
};
postorder(root){
    if(root){
        this.postorder(root.left);
        this.postorder(root.right);
        console.log(root.value)
    }
};
remove(value){
    
}
levelsearch(root){
    let que=[];
    que.push(root);
    while(que.length){
        let curr=que.shift();
        console.log(curr.value);
        if(curr.left){
            que.push(curr.left)
        }
        if(curr.right){
            que.push(curr.right)
        }
    }
};
min(root){
    if(!root.left){
        return root.value
    }else{
       return this.min(root.left);
    }
};
max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
}

}
let obj=new binary();
obj.insert(10);
obj.insert(8);
obj.insert(9);
obj.insert(3);
obj.insert(15);
obj.insert(100);
// console.log(obj.search(obj.root,10));
obj.levelsearch(obj.root);
// obj.preorder(obj.root);
// console.log("inorder");
// obj.inorder(obj.root);
// console.log("post order");
// obj.postorder(obj.root);
// console.log(obj.min(obj.root));
// console.log(obj.max(obj.root))