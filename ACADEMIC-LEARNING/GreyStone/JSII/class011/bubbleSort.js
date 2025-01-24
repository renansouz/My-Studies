let myArray = [152, 24, 111, 569, 3231, 1232, 131, 546, 89976, 55];  

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

bubbleSort(myArray)

