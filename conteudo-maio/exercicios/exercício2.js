/*
2 - Utilizando os conceitos apresentados, pergunte ao usuário. 
    • Qual o nome do usuário; 
    • Qual sua idade; 
    • Bairro onde mora; 
    • Passe o nome do usuário para todas as letras em maiúscula. 
    • Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o resultado da soma desses números na tela. 
*/

// exercício 2
var nome = window.prompt('Qual é seu nome?');
var idade = window.prompt('Qual é sua idade?');
var bairro = window.prompt('Em qual bairro você mora?');
var nome_min = nome.toLowerCase();
console.log(nome_min);

// exercício 2.5
var num1 = Number(window.prompt('Insira o primeiro número'));
var num2 = Number(window.prompt('Insira o segundo número'));

soma = num1 + num2;
alert(`O resultado é ${soma}`);
