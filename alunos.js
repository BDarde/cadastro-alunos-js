var alunos = [
    [1, "Bruno Darde", 23, "Análise e desenvolvimento de sistemas"],
    [2, "João Pedro", 24, "Química"],
    [3, "Manuela Pacheco", 28, "Matêmatica"]
]

function mostrarAlunos() {
    alunos.forEach(aluno => {
        console.log(`ID: ${aluno[0]}, Nome: ${aluno[1]}, Idade: ${aluno[2]}, Curso: ${aluno[3]}`);
    });
}

function addAlunos(id, name, idade, curso) {
    alunos.push([id, name, idade, curso]);
}



function removeAlunos(id) {

    for (let i = 0; i < alunos.length; i++) {
        if (parseInt(id) === alunos[i][0]) {

            console.log(`Aluno: ${alunos[i][1]} removido com sucesso`)
            alunos.splice(i, 1);

            
        }
    }
}



function encontrarAlunoId(id) {

    for (let i = 0; i < alunos.length; i++) {
        if (parseInt(id) === alunos[i][0]) {
            console.log(alunos[i])
        }

    }

}

function menu() {
    var op;

    var entrada = require('prompt-sync')({ sigint: true })

    do {

        console.log('\b MENU\n OPÇÂO (1): Mostrar alunos.\n OPÇÃO (2): Adicionar um aluno.\n OPÇÃO (3): Remover aluno por id.\n OPÇÃO (4): Encontrar aluno por id: ')
        op = parseInt(entrada('Digite a opção: '))
        switch (op) {


            case 1:
                mostrarAlunos();
                break;

            case 2:
                mostrarAlunos();
                addAlunos(
                    parseInt(entrada('Digite o id do novo aluno: ')),
                    entrada('digite o nome a ser adicionado: '),
                    parseInt(entrada('Digite a idade do aluno a ser adicionado: ')),
                    entrada('Digite o curso do aluno a ser adicionado: '));
                mostrarAlunos(); break;

            case 3:

                removeAlunos(entrada('Digite o ID do aluno a ser removido do sistema: '));

                break;


            case 4:

                encontrarAlunoId(parseInt(entrada("Digite o ID do aluno a ser encontrado: ")));
                break;


            default:

                console.log('Opção inexistente')
                break;




            case 0: console.log('Parando o sistema'); break;
        }



    } while (op !== 0);
}

menu()