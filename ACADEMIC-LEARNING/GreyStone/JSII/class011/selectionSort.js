let array = [152, 24, 111, 569, 3231, 1232, 131, 546, 89976, 55];

let selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min])
        min = j;
    }

    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  console.log(arr);
  return arr
}
selectionSort(array)