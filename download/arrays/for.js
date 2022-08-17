const numeros = [100, 200, 300, 400, 500, 600]

for (let i = 0; i < numeros.length; i++) {
  console.log(i, numeros[i])
}




const notas = [10, 7, 8, 9]
let somaDasNotas = 0

for (i=0; i < notas.length; i++) {
  somaDasNotas += notas[i]
}

let media = somaDasNotas/ notas.length

console.log(media)