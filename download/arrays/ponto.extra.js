const notas = [10, 4, 8, 7]

const notasAtualizadas = notas.map(nota => 
  nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)

//O forEach não retorna nenhum dado, apenas executa o que está dentro do bloco da função

//Tudo que a função callback do map faz é retornada como uma nova array