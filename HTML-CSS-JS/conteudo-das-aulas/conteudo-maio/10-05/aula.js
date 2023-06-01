// Laço For

var lista = [15, 12, 32, 35];

for (i in lista) {
    console.log(lista[i]);
}

for (let num = 0; num <= 5; num += 1) {
    console.log(`Somando num: ${num}`);
}

// Listas Aninhadas

let lista_mercado = [
    ['Frango', 'Pão', 'Arroz', 'Feijão'],
    ['Alvejante', 'Sabonete', 'Detergente'],
    ['Panela', 'Lata de lixo', 'Espátula'],
];

for (i in lista_mercado) {
    console.log('');
    for (j in lista_mercado[i]) {
        console.log(lista_mercado[i][j]);
    } 
}

let lista2 = lista.toString()

console.log(lista2);

let lista_frutas = ['Banana', 'Morango', 'Mamão', 'Kiwi', 'Melão']
console.log('');
for (i in lista_frutas) {
    console.log(`Eu gosto de ${lista_frutas[i]}`);
}