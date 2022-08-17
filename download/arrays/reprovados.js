const alunos = ["Ana", "Vivian", "Bernardo", "Miguel", "Jaqueline"]
const notas = [4, 8, 2, 9, 7]

const reprovados = alunos.filter( (aluno,indice) => 
notas[indice] < 5)

console.log(`Nome dos alunos reprovado: ${reprovados}`)


//o que deve ser retornado da função callback para que o método filter funcione? Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.