class minHeap {
  constructor() {
    this.heap = [null];
  }

  insert(val) {
    this.heap.push(val);
    let curr = this.heap.length - 1;
    let parent = this.parent(val);
    while (this.heap[curr] < this.heap[parent] && parent) {
      [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]]
      curr = parent;
      parent = this.parent(this.heap[curr]);
    }

  }

  parent(val) {
    return Math.trunc(this.heap.indexOf(val) / 2);
  }
}

let mh1 = new minHeap();
console.log(mh1);

mh1.insert(5);
mh1.insert(1);
mh1.insert(0);
mh1.insert(-1);
mh1.insert(-2);
console.log(mh1);
