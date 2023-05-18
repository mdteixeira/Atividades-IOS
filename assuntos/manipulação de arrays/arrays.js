// método ForEach()

var Fruits = ['apple', 'banana', 'orange'];

Fruits.forEach((item, index) => {
    console.log(index + 1, ':', item);
});

console.log('======');

let cores = ['verde', 'azul', 'vermelho', 'amarelo'];

cores.forEach((item, num) => {
    console.log(`A cor da moda é ${item}, e ela está no TOP ${num + 1}`);
});

console.log('\n---------------------------------------------\n');

// !!! método Map

const valores = [
    {
        produto: 'iPhone 13',
        preco: 3820,
    },
    {
        produto: 'TV Philips Ambilight',
        preco: 3250,
    },
    {
        produto: 'Tenis Nike AirMax',
        preco: 345.5,
    },
    {
        produto: 'Volvo C30',
        preco: 45550,
    },
];

// adiciona 10% ao preço

let novosValores = valores.map((nv) => (nv.preco * 1.1).toFixed(2));

console.log(novosValores);

// Método Filter

let idades = [13, 18, 15, 25, 22, 19, 45, 51, 33, 21];

let aprovados = idades.filter((idade) => {
    return idade >= 15 && idade <= 25;
});

console.log(aprovados.sort((a, b) => b - a));
