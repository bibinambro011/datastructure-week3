class HeapSort {
    constructor(arr) {
      this.array = [...arr];
      this.access = this.array.length - 1;
      this.buildHeap(arr);
    }
  
    buildHeap() {
      var parent = this.parent(this.array.length - 1);
      for (let i = parent; i >= 0; i--) {
        this.shiftDown(i);
      }
    }
  
    shiftDown(parent) {
      // var endIndex = this.array.length - 1;
      var endIndex = this.access;
      var leftIndex = this.left(parent);
  
      while (leftIndex <= endIndex) {
        var rightIndex = this.right(parent);
        var shiftIndex = leftIndex;
  
        if (rightIndex <= endIndex) {
          if (this.array[rightIndex] > this.array[leftIndex]) {
            shiftIndex = rightIndex;
          }
        }
  
        if (this.array[parent] < this.array[shiftIndex]) {
          var temp = this.array[parent];
          this.array[parent] = this.array[shiftIndex];
          this.array[shiftIndex] = temp;
          parent = shiftIndex;
          leftIndex = this.left(parent);
        } else {
          return;
        }
      }
    }
  
    shiftUp(downIndex) {
      while (downIndex >= 0) {
        var parnet = this.parent(downIndex);
        if (arr[parnet] < arr[downIndex]) {
          var temp = arr[parnet];
          arr[parnet] = arr[downIndex];
          arr[downIndex] = temp;
          downIndex = parnet;
        } else {
          return;
        }
      }
    }
  
    heapSort() {
      var lastElement = this.access;
  
      while (lastElement >= 0) {
        var swap = this.array[lastElement];
        this.array[lastElement] = this.array[0];
        this.array[0] = swap;
  
        lastElement--;
        this.access--;
        this.buildHeap();
      }
    }
  
    display() {
      console.log(this.array);
    }
  
    left(i) {
      return Math.floor(i * 2 + 1);
    }
  
    right(i) {
      return Math.floor(i * 2 + 2);
    }
  
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
  }
  
  var heap = new HeapSort([15, 10, 18, 5, 12, 20, 8]);
  heap.display();
  heap.heapSort();
  heap.display();
  