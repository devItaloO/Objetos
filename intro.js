// os objetos agregam dados de um objeto (pode ser uma pessoa, coisa, animal, etc)
// é a agregação de dados referentes ao que está mencionado

const pessoa = {
    // dentro voce adciona as propriedades da pessoa
    nome: "Makson",
    curso: "Programação",
    //dentro de um objeto voce usa : e , para adcionar as informações
    altura: 1.73,
    peso: 98,
    apelidos: ["Teteu", "Mateus"]
    // podemos agregar qualquer tipo de dado (number, string, array, etc)
    //dentro das propriedades do objeto
};

//console.log(pessoa);
// dessa forma vai apresentar todos os dados de dentro do objeto

// para especificar os dados usamos string template

//console.log(`Meu nome é ${pessoa.nome}`);

// também é possivel usar isso sem necessitar do string template. Ex.:
//console.log(pessoa.nome);

pessoa.nome = "Pedro";

// os dados dentro de um objeto (as propriedades) podem ser alteradas
//do mesmo jeito que podemos alterar os dados de um array
//console.log(pessoa.nome);

//o console em console.log se refere ao terminal que está sendo trabalhado
// e o log serve para logar isso (se conectar com o que tem no terminal)

console.log(`Meu nome é ${pessoa.nome}, atualmente sou estudante de ${pessoa.curso}, tenho ${pessoa.altura} de altura e peso ${pessoa.peso}kg`);


// outra forma de se referir a uma propriedade de um objeto é utilizando o exemplo abaixo

pessoa['nome'] = "Leonardo";
//isso se aplica a qualquer propriedade do objeto
console.log(pessoa['nome']);