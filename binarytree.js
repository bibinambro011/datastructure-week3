class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    };
};
class binary{
    constructor(){
        this.root=null;
    };
    insert(value){
        let node=new Node(value)
        if(!this.root){
            this.root=node;
        }else{
            insertNode(this.root,value)
        }
    };
    // insertNode(root,data){
    //     if(!root.left){
    //         if(root.left===null){
    //             root.left=node
    //         }else{
    //             this.insertNode(this.root.left,value);
    //         }
    //     }else{
    //         if(root.right){
    //             if(root.right===null){
    //                 root.right=node;
    //             }else{
                    
    //             }
    //         }
    //     }
    // }
    
    insertnode(root,value){
        if(!root.left){
            root.left=node
        }else{
            if(!root.right){
                root.right=node
            }else{
                this.insertnode(this.root.left,value)
            }
        }
    };

}