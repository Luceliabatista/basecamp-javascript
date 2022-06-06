// #Atividade 1
const alunos = [
    { nome: "José", notaFinal: 75, turma: '1A' },
    { nome: "Clara", notaFinal: 55, turma: '1B' },
    { nome: "Maria", notaFinal: 49, turma: '1C' }
]
function alunosAprovados(array, mediaFinal) {
    let aprovados = []

    for (let i = 0; i < array.length; i++) {
        const { notaFinal, nome } = array[i];

        if (notaFinal >= mediaFinal) {
            aprovados.push(nome)
        }
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 50))

