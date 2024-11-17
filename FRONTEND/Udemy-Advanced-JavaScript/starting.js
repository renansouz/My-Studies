const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

const calcTempAmplitude = function (temps) {
  let max = temps[0]
  let min = temps[0]

  for(let i = 0; i < temps.lenght; i++){
    const curTemp = temps[i]

    if(curTemp > max) max = curTemp
    if(curTemp < min) min = curTemp

  }
  console.log(max, min);
  return max - min
}
const amplitude = calcTempAmplitude(temperatures)
console.log(amplitude)