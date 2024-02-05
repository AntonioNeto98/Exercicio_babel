"use strict";

var alunos = [{
  nome: "Jessica",
  nota: 8.5
}, {
  nome: "João",
  nota: 7
}, {
  nome: "Alex",
  nota: 5
}, {
  nome: "Ellen",
  nota: 5
}];
function filtrarAlunos(aprovacaoMinima, listaAlunos) {
  return listaAlunos.filter(function (aluno) {
    return aluno.nota >= aprovacaoMinima;
  });
}
var notaMinima = 6.0;
var alunosAprovados = filtrarAlunos(notaMinima, alunos);
console.log("Alunos aprovados: ");
alunosAprovados.forEach(function (aluno) {
  console.log("".concat(aluno.nome, ": ").concat(aluno.nota));
});