console.log('\nExercício de Split\n');

var str = 'Meu nome é Matheus';

var palavras = str.split(' ');

var nome = palavras[3];

console.log(nome);

console.log('\n\nExercício de Replace\n');
// Replace

// Altera um valor em uma String

var frase = 'Seja bem-vindo, usuário!';

console.log(frase);

nome = 'Enzo';

frase = frase.replace('usuário', nome);

console.log(frase);

console.log('\n\nExercício de Search\n');

// Search

// Procura um valor dentro de uma String
// Pode retornar a posição

/**
 * Verifica se a frase já tem nome, verificando se o termo inicial "usuário" ainda está presente.
 *
 * @returns True se tiver nome
 * @returns False se ainda tiver o termo "usuário" na frase
 */
var temNome = frase.search('usuário') == -1;

console.log(temNome);

// Tomada de decisões com If e Else

console.log('\n\nExercício 1 de If-Else\n');
// Exercício 1

var nota_1 = 5;
var nota_2 = 6;

var media = (nota_1 + nota_2) / 2;
let aprovado;

if (media >= 6) {
    aprovado = true;
} else {
    aprovado = false;
}

console.log(aprovado);

console.log('\nExercício 2 de If-Else\n');
