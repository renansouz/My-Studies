let a = 'oi'
let b = 'olá'

Deno.test("Teste do oi (NO API)", () => {
    if (a != "oi") {
        throw new Error ('${a} não é oi')
    }
})

Deno.test("Título do teste", () => {

})

Deno.test("Não pode ser oi (NO API)", () => {
    if (b == "oi") {
        throw new Error ('${a} é oi')
    }
})