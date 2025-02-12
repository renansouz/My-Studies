var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[i+j] === target) {
                console.log([i, i+j] + "sim");
                return [i, i+j]
            }
        }
    }
};

twoSum([3,2,3], 6)

//optimized way

// var twoSum = function(nums, target) {
//     const map = new Map(); // Create a hash map to store numbers and their indices

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i]; // Calculate the complement
        
//         // Check if the complement exists in the map
//         if (map.has(complement)) {
//             return [map.get(complement), i]; // If found, return the indices
//         }
        
//         // If not, store the current number with its index
//         map.set(nums[i], i);
//     }
// };

// console.log(twoSum([3, 2, 3], 6));