import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "https://deno.land/std/testing/asserts.ts"

let aluno = 'Gabriel'
let professores = ['João', 'Sieg', 'Palhares', 'Avelino']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Gabriel") 
    
    //Verifica se há 'Gabriel'
})