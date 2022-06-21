import { Ponto } from "./Ponto"
import { Retangulo } from "./Quadrilatero"

let A = new Ponto(0, 5)
let B = new Ponto(8, 0)

let C = new Ponto(1, 4)
let D = new Ponto(8, 5)
let E = new Ponto(13, 6)

let Verificar = new Retangulo(A, B)

console.log(Verificar.EstaDentro(C)? "O ponto C está dentro da area do Quadrilátero!": "O ponto C não está dentro da area do Quadrilátero!")
console.log(Verificar.EstaDentro(D)? "O ponto D está dentro da area do Quadrilátero!": "O ponto D não está dentro da area do Quadrilátero!")
console.log(Verificar.EstaDentro(E)? "O ponto E está dentro da area do Quadrilátero!": "O ponto E não está dentro da area do Quadrilátero!")
