const myPromise = new Promise((resolve, reject) => {
  const success = true; 

  if (success) {
    resolve("The operation was successful!");
  } else {
    reject("The operation failed.");
  }
});

myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("The promise has been settled.");
  });