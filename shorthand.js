const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2020,
    cor: "Preto"
}
const minhaAltura = 1.85;

const pessoa = {
    nome: "Ítalo",
    idade: 28,
    altura: 1.85,
    peso: 71,
    carro //nesses casos nao tem a necessidade de colocar duas vezes por terem o mesmo nome
    // porém so funciona se forem exatamente iguais
    // no caso da altura nao ira funcionar por serem variaveis com nomes diferentes
    //    carro: carro //podemos colocar uma variavel dentro de outra mesmo sendo um objeto
}

//informações do carro: marca, ano, nodelo, cor

//console.log(pessoa); //traz todas as informações
console.log(pessoa.carro.ano); // isso funciona mesmo ser for um objeto dentro do outro
//se o caminho ate o dado estiver correto ira retornar o desejado
