const pessoa = {
    nome: "Ana",
    idade: 47,
    cidade: "Recife",
    profissão: "Quenga"
};

//const nome = pessoa.nome;
//const idade = pessoa.idade;

//console.log(nome, idade); //escrever assim imprime as duas variaveis uma do lado da outra


const { nome, idade, ...outros } = pessoa //dessa forma é mais pratico, especialmente
//quando precisamos pegar varias variaveis
//os tres pontos sinalizam todos os dados que nao foram utilizados do objeto
console.log(nome, idade);
console.log(outros);