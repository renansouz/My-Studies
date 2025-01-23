let arr = [10,20394,48,20,78, 2, 1, 5678]

function bubbleSort(arr) {
  let swapped = false

  while(!swapped) {
    swapped = true

    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i+1]) {
        const temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i+1] = temp
        swapped = false
      }
    }
  }
  console.log(arr);
  return arr
}

