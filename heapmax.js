class heapmax{
    constructor(arr){
        this.heap=[...arr];
        this.size=this.heap.length-1;
        this.heapbuild();
    };
    heapbuild(){
        for(let i=this.parent(this.heap.length-1);i>=0;i--){
            this.shiftdown(i)
        }
    };
    parent(i){
        return Math.floor((i-1)/2);
    };
    leftchild(i){
        return i*2+1;
    };
    rightchild(i){
        return i*2+2;
    };
    swap(parent,child){
        let temp=this.heap[parent];
        this.heap[parent]=this.heap[child];
        this.heap[child]=temp;
    }
    shiftdown(i){
        let leftindex=this.leftchild(i);
        let endindex=this.heap.length-1;
        while(leftindex<=endindex){
            let shiftindex=leftindex;
            let rightindex=this.rightchild(i);
            if(rightindex<=endindex){
            if(this.heap[rightindex]>this.heap[shiftindex]){
                shiftindex=rightindex
            }
        }
        if(this.heap[i]<this.heap[shiftindex]){
            this.swap(i,shiftindex);
            i=shiftindex;
            leftindex=this.leftchild(i);
        }else{
            return;
        }
        }
    };
    heapSort() {
        while (this.size >= 0) {
          this.swap(this.size, 0);
          this.size--;
          this.heapbuild()
    }
  }
    insert(value){
        this.heap.push(value);
        this.shiftup(this.heap.length-1)
    };
    shiftup(i){
        let parentindex=this.parent(i);
        while(parentindex>=0){
            if(this.heap[i]>this.heap[parentindex]){
                this.swap(i,parentindex);
                i=parentindex;
                parentindex=this.parent(i)
            }else{
                return
            }
        }
    };
    display(){
        for(let i=0;i<this.heap.length;i++){
            console.log(this.heap[i]);
        }
    }
}
let arr=[90,78,77,56,20,100]
let obj=new heapmax(arr);
obj.insert(10);
obj.insert(20);
obj.insert(30);
obj.insert(40);
obj.insert(1);
obj.insert(2);
obj.insert(4);
obj.heapSort()
obj.display()