const sala1 = [6,7,4,8,10, 6, 9, 3, 10]
const sala2 = [6,7,4, 9, 3, 10]
const sala3 = [8, 9, 3, 10]

function mediaSala(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acumulador, atual) => atual + acumulador, 0)
  return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala 1 ${mediaSala(sala1)}`)
console.log(`Média da sala 2 ${mediaSala(sala2)}`)
console.log(`Média da sala 3 ${mediaSala(sala3)}`)


const notas = [10, 6.5, 6, 7]
const media = notas.reduce((acumulador, atual) => atual + acumulador, 0)/ notas.length

console.log(media)
