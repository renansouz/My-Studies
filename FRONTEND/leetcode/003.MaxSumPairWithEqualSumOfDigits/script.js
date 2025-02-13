var maximumSum = function(nums) {
  let equalValue = []
   console.log( 
    nums
    .map((num) => {
      if (num.toString().length === 1) {
        return num
      }
      return Number(num.toString().split("")[0]) + Number(num.toString().split("")[1])
    })
    .forEach((val, index, arr) => {
      for(let i = 0; i < 1; i++){
        console.log(arr[index],arr[index +i]);
        if (val === arr[index + i]) {
          equalValue.push(arr[index] + arr[index +i])
        }
      }
    }
  )
  );
  console.log(equalValue);
};
maximumSum([18,43,36,13,7])