var nome = 'Matheus';
var idade = 18;

var frase = `O aluno ${nome} tem ${idade} anos de idade.`;

console.log(frase + '\n');

// Aula 02

var num1 = 5;
var num2 = 7.8;
var num3 = Infinity;
var num4 = NaN;
var num5 = 5;

/*
    console.log(typeof num1); //number
    console.log(typeof num2); //number
    console.log(typeof num3); //number
    console.log(typeof num4); //number
    console.log(typeof num5); //number
*/

// Caracteres diferentes

var frase = `\n\tPara digitar \'aspas\', é necessário utilizar \\\' no código. Também funciona com aspas duplas, que o resultado é \", e é necessário digitar \\\" no código para obter este resultado\n`;

// Exercício 1

let nota1 = 8;
let nota2 = 6;

var media = (nota1 + nota2) / 2;
var exer1 = `A média do Aluno é ${media}`;

console.log(exer1 + '\n');

// Exercício 2

var exer2 = `A comparação entre os valores 3 e \"8\" é : ${'8' == 3}`;
console.log(exer2 + '\n');

// Exercício 3

let bool1 = true;
let bool2 = true;

/**
 * Retorna true se bool1 e bool2 forem true;
 * false se algum dos valores de entrada for false
 */
var exer3 = bool1 && bool2;

console.log(exer3);
