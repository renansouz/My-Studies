// pending
// resolved
// rejected
// finalizada
const p = new Promise((resolve) => {
  console.log(`A promise está sendo executada.`);
  setTimeout(() => {
    console.log(`resolvendo a promisse`);
    resolve(true)
  }, 2000);
})

console.log(p);

setTimeout(() => {
  console.log(p);
}, 3000);