// Min Cost Ropes using Min-Heap (Priority Queue)

// Priority Queue Implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Swap utility
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert value into heap
  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  // Heapify upwards
  bubbleUp(index) {
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[parent] > this.heap[index]) {
      this.swap(parent, index);
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  // Remove min element
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  // Heapify downwards
  bubbleDown(index) {
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let smallest = index;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== index) {
      this.swap(index, smallest);
      this.bubbleDown(smallest);
    }
  }

  size() {
    return this.heap.length;
  }
}

// Main function
function mincost(arr) {
  let heap = new MinHeap();

  // Insert all rope lengths into heap
  for (let rope of arr) {
    heap.push(rope);
  }

  let totalCost = 0;

  // Keep connecting ropes until one remains
  while (heap.size() > 1) {
    let first = heap.pop();
    let second = heap.pop();
    let cost = first + second;
    totalCost += cost;
    heap.push(cost);
  }

  return totalCost;
}

// Examples
console.log(mincost([4, 3, 2, 6])); // 29
console.log(mincost([1, 2, 3, 4, 5])); // 33


