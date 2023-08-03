const pessoa = {
    nome: "Ana",
    idade: 47,
    cidade: "Recife",
    profissao: "Quenga" //se eu coloco acentos ou caracteres especiais ele imprime como uma string em verde
};

const endereco = {
    rua: 27,
    numero: 20,
    bairro: "Saint Joseph"
};

//... isso é spread, serve para juntar objetos, separar, etc...

//const objetoFundido = {
//    nome: pessoa.nome
//    idade: pessoa.idade
//    rua: endereco.rua
//    numero: endereco.numero
//}

//ou, de forma mais rapida, com o spread:

const objetoFundido = {
    ...pessoa,
    ...endereco,
    quadra: 20 //também podemos criar novas propriedades dessa forma
};

console.log(objetoFundido)