for (let i = 1; i <= 100; i++) {
  let isPrimo = true;

  for (let j = 2; j < i; j++) { 
      if (i % j === 0) {
          isPrimo = false;
      }
  }

  if (isPrimo) {
      console.log(`Prime number: ${i}`);
  }
}