// // pending
// // resolved
// // rejected
// // finalizada
// const p = new Promise((resolve, reject) => {
//   console.log(`A promise está sendo executada.`);
//   setTimeout(() => {
//     if(true) {
//       reject(false)
//     }
//     console.log(`resolvendo a promisse`);
//     resolve(true)
//   }, 2000);
// })

// console.log(p);

// setTimeout(() => {
//   console.log(p);
// }, 3000);

  
function execute() {
  return new Promise ((resolve, reject) => {
    console.log(`A promise está sendo executada...`);
    setTimeout(() => {
      console.log(`Resolvendo a promise...`);
      resolve('resultado')
    }, 1000 * 2)
  })
}  
  
const p = execute()

console.log(p);

setTimeout(() => {
  console.log(p);
}, 2000)