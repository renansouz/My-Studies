function twoSum(nums, target) {
    // Create a Map to store the complement of each element
    const complementMap = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // Calculate the complement for the current element
        const complement = target - num;

        // Check if the complement exists in the Map
        if (complementMap.has(complement)) {
            // If found, return the indices of the two numbers
            return [complementMap.get(complement), i];
        } else {
            // If not found, store the current number and its index in the Map
            complementMap.set(num, i);
        }
    }
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]