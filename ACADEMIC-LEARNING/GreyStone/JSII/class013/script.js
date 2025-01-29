var minSubArrayLen = function(target, nums) {
  let temp = 0
  for(let i = 0; i <= nums.length; i++) {
  
    if(temp <= target) {
      console.log(nums[i])
      return nums[i]
    } else {
      temp += nums[i] 
    }
  }
}

let array = [2,3,1,2,4,3]
minSubArrayLen(7, array)