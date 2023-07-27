class heapmax {
  constructor(arr) {
    this.heap = [...arr];
    this.size = this.heap.length - 1;
    this.buidheap();
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftchild(i) {
    return i * 2 + 1;
  }
  rightchild(i) {
    return i * 2 + 2;
  }
  buidheap() {
    for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
      this.shiftdown(i);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftup(this.heap.length - 1);
    this.size++;
  }
  shiftup(i) {
    let parent = this.parent(i);
    while (parent >= 0) {
      if (this.heap[parent] < this.heap[i]) {
        this.swap(i, parent);
        i = parent;
        parent = this.parent(i);
      } else {
        return;
      }
    }
  }
  swap(parent, child) {
    let temp = this.heap[parent];
    this.heap[parent] = this.heap[child];
    this.heap[child] = temp;
  }
  remove() {
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.shiftdown(0);
  }
  shiftdown(i) {
    let leftindex = this.leftchild(i);
    let endindex = this.size;
    while (leftindex <= endindex) {
      let shiftindex = leftindex;
      let rightindex = this.rightchild(i);
      if (rightindex <= endindex) {
        if (this.heap[rightindex] > this.heap[leftindex]) {
          shiftindex = rightindex;
        }
      }
      if (this.heap[i] < this.heap[shiftindex]) {
        this.swap(i, shiftindex);
        i = shiftindex;
        leftindex = this.leftchild(i);
      } else {
        return;
      }
    }
  }
  heapSort() {
    while (this.size >= 0) {
      this.swap(0,this.size);
      this.size--;
      this.buidheap();
    }
  }
  display() {
    for (let x of this.heap) {
      console.log(x);
    }
  }
}
let arr = [56, 90, 12, 44];
let obj = new heapmax(arr);
obj.insert(100);
obj.insert(1);
obj.insert(29);
obj.insert(18);
obj.insert(30000);
obj.heapSort();
obj.display();
