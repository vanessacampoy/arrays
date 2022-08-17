const alunos = ["Ana", "Vivian", "Bernardo", "Miguel", "Jaqueline"]
const mediaAlunos = [10, 7, 8, 5]

let listaNotasEAlunos = [alunos, mediaAlunos]

const exibeNomeNota = (nomeAluno) => {
  if (listaNotasEAlunos [0].includes(nomeAluno)) {
    let indice = listaNotasEAlunos[0].indexOf(nomeAluno)
    return listaNotasEAlunos[0][indice] + ',sua média é ' + listaNotasEAlunos[1][indice]
  } else {
    return "Aluno não está cadastrado."
  }
}

console.log(exibeNomeNota("Jaqueline"))
