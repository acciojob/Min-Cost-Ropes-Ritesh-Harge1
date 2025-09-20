// Function to calculate minimum cost of connecting ropes
function mincost(arr) {
  // Use built-in array sort + shift for simplicity
  // (for N <= 1000, this is efficient enough)
  arr.sort((a, b) => a - b);

  let totalCost = 0;

  while (arr.length > 1) {
    // Take two smallest
    let first = arr.shift();
    let second = arr.shift();

    let cost = first + second;
    totalCost += cost;

    // Insert back into sorted position
    let i = 0;
    while (i < arr.length && arr[i] < cost) i++;
    arr.splice(i, 0, cost);
  }

  return totalCost;
}

// Main logic for Node.js input
function main(input) {
  const lines = input.trim().split("\n");
  const arr = lines[0].replace(/\[|\]/g, "").split(",").map(Number);

  console.log(mincost(arr));
}

// Read input from stdin
let inputData = "";
process.stdin.on("data", (chunk) => {
  inputData += chunk;
});
process.stdin.on("end", () => {
  main(inputData);
});

