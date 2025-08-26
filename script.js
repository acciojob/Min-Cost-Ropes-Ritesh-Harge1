class MinHeap {
  constructor() {
    this.heap = [];
  }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }
  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  swap(i, j) { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }

  insert(key) {
    this.heap.push(key);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else break;
    }
  }
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }
  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      if (rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
        smallerChildIndex = rightChildIndex;
      }
      if (this.heap[index] > this.heap[smallerChildIndex]) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else break;
    }
  }
  size() { return this.heap.length; }
}

function mincost(arr) {
  if (arr.length <= 1) return 0;
  let heap = new MinHeap();
  for (let num of arr) heap.insert(num);
  let totalCost = 0;
  while (heap.size() > 1) {
    let first = heap.extractMin();
    let second = heap.extractMin();
    let newRope = first + second;
    totalCost += newRope;
    heap.insert(newRope);
  }
  return totalCost;
}

// ✅ Reading user input
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  // assume input is space-separated integers on one line
  let arr = input[0].split(" ").map(Number);
  console.log(mincost(arr));
});

