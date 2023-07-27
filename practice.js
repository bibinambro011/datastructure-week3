class MinHeap {
    constructor(arr) {
      this.heap = [...arr];
      this.buildHeap();
    }
    buildHeap() {
      for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
        this.shiftDown(i);
      }
    }
    shiftDown(i) {
      let leftIndex = this.leftChild(i);
      let endIndex = this.heap.length - 1;
  
      while (leftIndex <= endIndex) {
        let shiftIndex = leftIndex;
        let rightIndex = this.rightChild(i);
        if (rightIndex <= endIndex) {
          if (this.heap[rightIndex] < this.heap[leftIndex]) {
            shiftIndex = rightIndex;
          }
        }
        if (this.heap[i] > this.heap[shiftIndex]) {
          this.swap(i, shiftIndex);
          i = shiftIndex;
          leftIndex = this.leftChild(i);
        } else {
          return;
        }
      }
    }
    shiftUp(i) {
      let parentindex = this.parent(i);
      while (parentindex >= 0) {
        if (this.heap[parentindex] > this.heap[i]) {
          this.swap(parentindex, i);  
          i = parentindex;
          parentindex = this.parent(i);
        } else {
          return;
        }
      }
    }
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1)
    }
    remove() {
      this.swap(0, this.heap.length - 1);
      this.heap.pop();
      this.shiftDown(0);
    }
    swap(index1, index2) {
      let temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
    }
    display() {
      for (let i = 0; i < this.heap.length; i++) {
        console.log(this.heap[i]);
      }
    };
    
    peek() {
      return this.heap[0];
    }
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
    leftChild(i) {
      return (i * 2) + 1
    }
    rightChild(i) {
      return (i * 2) + 2
    }
  }
  let arr = [67,89,10,67,900]
  const min = new MinHeap(arr);
  min.insert(10);
  min.insert(90);
  min.insert(100);
  min.insert(200)
  
  min.heapSort()
  min.display();
  // min.insert(4)
  // min.insert(2)
  // min.insert(1)
  // min.display();
  // console.log("\n");
  // min.remove()
  // min.display();
  // console.log("\n");
  // console.log(min.peek());