var minOperations = function(nums, k) {
  let operations = 0
  while(nums.length > 1) {
    if(nums.every(num => num >= k)) {
      return operations
    }
    nums = nums.sort((a,b) => a-b)
    nums.push((nums[0] * 2) + nums[1])
    nums.shift()
    nums.shift()  
    operations++
  }  
  return nums[0] >= k ? operations : -1;
};
minOperations([2,11,10,1,3],  10)