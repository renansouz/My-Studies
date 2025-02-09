var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; i < nums.length; j++) {
            if (nums[i] + nums[i+j] === target) {
                console.log([i, i+j] + "sim");
                return [i, i+j]
            }
        }
    }
};

twoSum([3,2,3], 6)