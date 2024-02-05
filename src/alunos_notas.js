const alunos = [
    { nome: "Jessica", nota: 8.5 },
    { nome: "João", nota: 7 },
    { nome: "Alex", nota: 5 },
    { nome: "Ellen", nota: 5 },
    
];

    function filtrarAlunos(aprovacaoMinima, listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= aprovacaoMinima);
}

const notaMinima = 6.0;
const alunosAprovados = filtrarAlunos(notaMinima, alunos);

console.log("Alunos aprovados: ");

alunosAprovados.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.nota}`);
});