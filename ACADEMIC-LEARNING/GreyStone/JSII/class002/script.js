let functionName = (price, color, memory) => {
  return {
    price : price,
    color : color,
    memory : memory
  }
}

const obj =  functionName(10, 'red', 100)

console.log(obj);
