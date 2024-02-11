var alunos = [
    [1, "Bruno Darde", 23, "Análise e desenvolvimento de sistemas"],
    [2, "Zendaya", 25, "Química"],
    [3, "João Pedro", 24, "Química"],
    [4, "Manuela Pacheco", 28, "Matêmatica"]
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


function ordenaAlunosPorNome() {
    alunos = alunos.sort((a, b) => {
        return a[1].localeCompare(b[1]);
    });
}


function ordenaAlunosPorLetras(desc) {
    if (desc) {
        alunos = alunos.sort((a, b) => {
            return a[1].length - b[1].length
        })
    } else {
        alunos = alunos.sort((a, b) => {
            return b[1].length - a[1].length
        })
    }
}

function menu() {
    var op;

    var entrada = require('prompt-sync')({ sigint: true })

    do {

        console.log('\b MENU\n OPÇÂO (1): Mostrar alunos.\n OPÇÃO (2): Adicionar um aluno.\n OPÇÃO (3): Remover aluno por id.\n OPÇÃO (4): Encontrar aluno por id:\n OPÇÃO (5): Ordenar alunos por Nome: \n OPÇÃO (6): Ordenar alunos por quantidade de letra: ')
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


            case 5:

                ordenaAlunosPorNome();
                break;

            case 6:

                let ord = parseInt(entrada('Digite 1 para ordem crescente e 2 para ordem decrescente...'));

                if (ord === 1) {
                    ordenaAlunosPorLetras(true);
                } else {
                    ordenaAlunosPorLetras(false)
                }

                console.log('Alunos reorganizados')

                break;


            default:

                console.log('Opção inválida')
                break;




            case 0: console.log('Parando o sistema'); break;
        }



    } while (op !== 0);
}
menu()