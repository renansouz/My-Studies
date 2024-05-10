var filter = function(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++){
      if (fn(arr[i], i)){
        newArray.push(arr[i])
      }
      if (fn(arr[i], i)){
        newArray = arr[i]
      }
  };
  return newArray
};


console.log(filter([0,2,3], function firstIndex(n, j) { return j === 0; }));