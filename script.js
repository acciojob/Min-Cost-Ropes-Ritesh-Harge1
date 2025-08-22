function mincost(arr) {
    // Initialize total cost
    let totalCost = 0;

    // Keep combining ropes until only one rope remains
    while (arr.length > 1) {
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);

        // Take the two smallest ropes
        let first = arr.shift();   // smallest
        let second = arr.shift();  // second smallest

        // Combine them
        let cost = first + second;

        // Add cost to total
        totalCost += cost;

        // Add the combined rope back to the array
        arr.push(cost);
    }

    return totalCost;
}

// Example usage:
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33

