const currentDay = new Date()
const hours = currentDay.getHours();

if (hours <12) {
  console.log("good morning");
} else if (hours >= 12) {
  console.log("noon");
} else {
  console.log("good night");
}