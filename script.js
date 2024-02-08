const alunos = [
  {
    nome: "vitor",
    nota: 1
  },
  {
    nome: "vitoria",
    nota: 6
  },
  {
    nome: "maria",
    nota: 7
  },
  {
    nome: "pedro",
    nota: 4
  },
  {
    nome: "paulo",
    nota: 5
  },
]

const notaSeis = (arrayDeAlunos) => {

  for (let item of arrayDeAlunos) {

    if(item.nota >= 6){
      console.log(item.nome)
    }
  }
} 

notaSeis(alunos)