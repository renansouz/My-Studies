var map = function(arr, fn) {
  const result = []
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i]))
    }
    return result
};

console.log(map([1,2,3], function plusone(n) { return n + 1; }));