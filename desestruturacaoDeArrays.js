const array = [1, 2, 3, 4, 5, 6];

// const a = array[0];
// const b = array[1]; 
//podemos fazer a divisao dos arrays dessa forma porem é mais prático como abaixo

const [a, b, ...resto] = array;
// os ... tem de ser sempre o ultimo elemento
//toda vez que for desestruturação, as chaves [] ficam do lado esquerdo

console.log(a, b, resto);