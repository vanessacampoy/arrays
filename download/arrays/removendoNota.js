//Removendo um elemento do array

const notas  = [10, 6.5, 7, 8.5, 10]
notas.pop(10)
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média do aluno é: ${media}`)
