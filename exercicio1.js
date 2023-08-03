const aluno = {
    nome: "Italo",
    idade: 28,
    altura: 1.85,
    temCNH: true,
    apelidos: ["Itim", "It"]
};

let textoCNH = "";

if (aluno.temCNH === true) {
    textoCNH = "possui CNH";
} else {
    textoCNH = "não possui CNH";
}


console.log(`${aluno.nome} tem ${aluno.idade} anos, possui ${aluno.altura}m de altura, ${textoCNH} e tem o seguinte apelido:
- ${aluno.apelidos[0]}
- ${aluno.apelidos[1]}`);
