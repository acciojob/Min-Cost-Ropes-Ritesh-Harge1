class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Get index helpers
  getParent(i) { return Math.floor((i - 1) / 2); }
  getLeft(i) { return 2 * i + 1; }
  getRight(i) { return 2 * i + 2; }

  // Insert into heap
  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  // Heapify upwards
  heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0 && this.heap[this.getParent(i)] > this.heap[i]) {
      [this.heap[i], this.heap[this.getParent(i)]] =
        [this.heap[this.getParent(i)], this.heap[i]];
      i = this.getParent(i);
    }
  }

  // Extract min element
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  // Heapify downwards
  heapifyDown(i) {
    let smallest = i;
    let left = this.getLeft(i);
    let right = this.getRight(i);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] =
        [this.heap[smallest], this.heap[i]];
      this.heapifyDown(smallest);
    }
  }
}

// Min cost ropes function
function mincost(arr) {
  let heap = new MinHeap();
  for (let num of arr) heap.insert(num);

  let totalCost = 0;

  while (heap.heap.length > 1) {
    let first = heap.extractMin();
    let second = heap.extractMin();
    let cost = first + second;
    totalCost += cost;
    heap.insert(cost);
  }

  return totalCost;
}

// Example
console.log(mincost([4, 3, 2, 6])); // 29
console.log(mincost([1, 2, 3, 4, 5])); // 33

