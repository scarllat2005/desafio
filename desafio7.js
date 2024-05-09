const alunos = ["João", "Juliana", "ana" , "caio"];
const medias = [10, 8, 7.5, 9];

const ListaDeAlunosEMedidas = [alunos, medias];

function exibeNomeeNota(alunos){
    if (ListaDeAlunosEMedidas[0].includes(aluno)){
        
        console.log(`${aluno} está cadastrado!`)

        const indice =  ListaDeAlunosEMedidas[0].indexOf(aluno);

        const mediaAluno = ListaDeAlunosEMedidas[1][indice];

        console.log(`${aluno} tem a media ${mediaAluno}`)

    }else {
      console.log("Aluno(a) não encontrado!")
    }
}
