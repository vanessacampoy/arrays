const notas = [6, 7, 4, 10]

let somaDasNotas = 0

//callback - uma funçao que chama outra funçao
notas.forEach (nota => {
  somaDasNotas += nota
})

let media = somaDasNotas/notas.length
console.log(media)


//Exemplo de função callback
const nomes = ["Vanessa", "Paula", "Carolina"]
nomes.forEach(ImprimeNomes)

function ImprimeNomes(nome) {
  console.log(nome)
}
