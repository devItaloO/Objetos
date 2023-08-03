const aluno = {
    nome: "Italo",
    idade: 28,
    altura: 1.85,
    temCNH: true,
    apelidos: ["Itim", "It"]
};

// o ternario serve para alterar os dados de uma variavel atraves de uma 
//condição ( condição ? se verdadeiro : se falso) como no exemplo abaixo
// assim o codigo fica mais limpo, lembrando que isso funciona para true ou false

const textoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH";

//let textoCNH = "";

//if (aluno.temCNH === true) {
//    textoCNH = "possui CNH";
//} else {
//    textoCNH = "não possui CNH";
//}


console.log(`${aluno.nome} tem ${aluno.idade} anos, possui ${aluno.altura}m de altura, ${textoCNH} e tem o seguinte apelido: `)
//- ${aluno.apelidos[0]}
//- ${aluno.apelidos[1]}`);

//o codigo acima nao esta robusto para cenarios diferentes de dois apelidos
// nesse caso utilizaremos o for para melhorar o codigo
// criasse a variavel apelido para suprir as possiveis futuras alterações
for (let apelido of aluno.apelidos)
    console.log(`- ${apelido} `)