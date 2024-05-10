var reduce = function(nums, fn, init) {
  if (nums.length === 0){
      return init
  }
  let accum = 0
  for (let i = 0; i < nums.length; i++){
    accum += fn(accum, nums[i])
  }
  return accum
};

console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0));