// Heaps have a tree like structure where
  // Node can have at most 2 children
  // Two types of Heaps
    // Min Heap
      // Parent smaller than children, ROOT IS SMALLEST
    // Max Heaps
      // Parent larger than chlidren, ROOT IS LARGEST

// Since there's no gaps in a heap, it's easier to implement using ARRAYS

// left child : i * 2
// right child : i * 2 + 1
// parent: i / 2

// Min Heap: ROOT IS SMALLEST where parent is smaller than children
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(val) {
    this.heap.push(val);
    let idx = this.heap.length - 1
    // while current's parent is greater than current, swap and update current
    while (this.heap[this.parent(idx)] > this.heap[idx]) {
      this.swap(this.parent(idx), idx);
      idx = this.parent(idx);
    }
  }

  remove(val) {
    let idx = this.contains(val);
    if (idx) {
      this.swap(idx, this.heap.length - 1);
      this.heap.pop();
      while (this.heap[idx] > this.heap[this.minChild(idx)]) {
        console.log('swap', this.heap[idx], this.heap[this.minChild(idx)]);
        this.swap(idx, this.minChild(idx));
        idx = this.parent(idx);
      }
    }
  }

  contains(val) {
    let idx = this.heap.indexOf(val);
    return idx > 0 ? idx : false;
  }

  swap(i, j) { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];}
  parent(idx) { return Math.trunc(idx/2); }
  // if left child < right child, return left child idx else right child idx
  minChild(idx) {
    return this.heap[idx * 2] < this.heap[idx * 2 + 1] ? idx * 2 : idx * 2 + 1;
  }

}

var mH = new MinHeap();
mH.insert(3);
// mH.insert(5);
// mH.insert(4);
// mH.insert(10);
// mH.insert(6);
// mH.insert(16);
// mH.insert(8);
console.log(mH);

mH.remove(3);
console.log(mH);
