// let arr = [30, 40, 50];
// const arrCopy = [...arr]; 
// console.log(arrCopy)

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arrJoin = [...arr1, ...arr2]; // Join 2 arrays
// console.log(arrJoin);

// let strContinental = 'Europe';
// let letters = [...strContinental, ' ', 'and Asia'];
// console.log(letters);
// console.log(...strContinental);

// const rankPlayers = [
//   prompt("1-5 what do you think about Mikel"),
//   prompt("1-5 what do you think about Lisa"),
//   prompt("1-5 what do you think about Luis"),
// ];

// console.log(rankPlayers);

// function average(n1, n2, n3) {
//   return (parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3;
// }

// console.log(rankPlayers);
// console.log(average(rankPlayers[0], rankPlayers[1], rankPlayers[2]));
// console.log(average(...rankPlayers));

// let obj1 = { foo: 'bar', x: 42 };
// let obj2 = { foo: 'baz', y: 13 };

// let clonedObj = { ...obj1 }; // { foo: "bar", x: 42 }
// let mergedObj = { ...obj2, ...obj1 }; // { foo: "baz", x: 42, y: 13 }

// console.log(mergedObj);

const shift = {
  shiftId: '1', workPlace: 'L.A', workers: [],
  start: "", end: "",

  // ES6 enhanced object literals
  startShift(startTime = '8:00') {
      console.log(`Shift started! ${startTime}`);
  },
  endShift(endTime = '0:00') {
      console.log(`Shift started! ${endTime}`);
  },
  workerForShift(w1, w2, w3) {
      console.log(`Worker at first shift ${w1}, ${w2} and ${w3}`);
  }
};

shift.endShift()