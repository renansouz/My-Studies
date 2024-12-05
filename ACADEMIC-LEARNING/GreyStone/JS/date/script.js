const currentDay = new Date()
const hours = currentDay.getHours();

// if (hours <12) {
//   console.log("good morning");
// } else if (hours >= 12) {
//   console.log("noon");
// } else {
//   console.log("good night");
// }

switch (true) {
  case (hours < 12):
    console.log("Good morning");
    break;
  case (hours >= 12 && hours < 6):
    console.log("Noon");
    break;
  default:
    console.log("Good night");
    break;
}