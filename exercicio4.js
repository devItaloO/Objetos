const produtosConsumidos = [
    {
        nome: "Comida",
        precoUnit: 4500,
        quantidade: 4
    },
    {
        nome: "Cerveja",
        precoUnit: 1500,
        quantidade: 6
    },
    {
        nome: "Água",
        precoUnit: 500,
        quantidade: 1
    }
];

const cartao = {
    nome: "Karen",
    idade: 27,
    produtosConsumidos
};

let totalAPagar = 0;
for (let produto of produtosConsumidos) {
    totalAPagar += produto.precoUnit * produto.quantidade //atenção especial aqui no +=
    // nesse caso a variavel produto que ira representar os produtos consumidos. devido ao for
}

console.log(`Olá ${cartao.nome}, como você está? O valor total de sua compra foi de R$ ${(totalAPagar / 100).toFixed(2)}`)

// o tofixed transforma as variaveis em string toda vez, entao so usa no final
//apos fazer todas as alterações