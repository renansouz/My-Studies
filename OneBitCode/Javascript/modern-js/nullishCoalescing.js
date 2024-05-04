// operador lógico assim como o ou || e como o e &&
// sinal nullish coalescing ??

const a = 0

const b = null

const c = "teste"

console.log(a ?? b ?? c)

let d = 0

let e = a || 42

console.log({ d, e});

e = d ?? 42

let f = null ?? 42

console.log({ f });