function greet(name) {
  console.log(`Hello, ${name}`);
}
function sendoff(name) {
  console.log(`goodbye, ${name}`);
}

function processUserInput(callback) {
  let name = renan
  callback(name);
}

processUserInput(greet);
