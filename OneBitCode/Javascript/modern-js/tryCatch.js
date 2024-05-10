function exampleFunction() {
  try {
    let result = someFunctionThatDoesNotExist();
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', error.message);
  } finally {
    console.log('The try...catch block has finished executing.');
  }
}

exampleFunction();