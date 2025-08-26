function mincost(arr) {
  if (arr.length <= 1) return 0; // No cost if only one rope

  let cost = 0;

  // Convert to array and sort
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    // Take two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    let newRope = first + second;
    cost += newRope;

    // Insert back into sorted order
    arr.push(newRope);
    arr.sort((a, b) => a - b);
  }

  return cost;
}

// Test cases
console.log(mincost([4, 3, 2, 6])); // 29
console.log(mincost([1, 2, 3, 4, 5])); // 33

