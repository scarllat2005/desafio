const alunos = ["João", "Juliana", "ana" , "caio"];
const medias = [10, 8, 7.5, 9];
                             //0   //1
const ListaDeAlunosEMedidas = [alunos, medias];

function exibeNomeeNota(alunos){
    if (ListaDeAlunosEMedidas[0].includes(aluno)){
        
        const [alunos, medias] = listaDeAlunosEMedias;
    
        const indice =  ListaDeAlunosEMedidas[0].indexOf(aluno);

        const mediaAluno = medias[indice];

        console.log(`${aluno} tem a media ${mediaAluno}`);

    }else {
      console.log("Aluno(a) não encontrado!");
    }
}
exibeNomeeNota("João")
exibeNomeeNota("juliana")
exibeNomeeNota("ana")
exibeNomeeNota("caio")