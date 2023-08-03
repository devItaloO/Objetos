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

const array = [{}, {}, {}]

console.log(`Olá, ${cartao.nome}, você tem ${cartao.idade} anos, certo?`)

cartao.idade = 28

console.log(`Parabéns ${cartao.nome}, você acabou de fazer ${cartao.idade} anos`)
console.log(`Na sua última vez você começou comprando ${produtosConsumidos[0].nome} e a sua última compra do dia foi ${produtosConsumidos[produtosConsumidos.length - 1].precoUnit}`)