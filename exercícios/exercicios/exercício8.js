/*
8 Atividades relacionais: crie um programa que solicite ao usuário que digite a sua 
altura em metros e o seu peso em quilogramas. 
Em seguida, o programa deve calcular o índice de massa corporal (IMC) do usuário usando a fórmula IMC = peso / altura*2 e 
verificar se o IMC está dentro do intervalo saudável de 18,5 a 24,9. 
O programa deve imprimir na tela se o IMC está dentro do intervalo saudável ou não.
 */

// exercício 8

var altura = prompt('Insira sua altura em metros');
var massa = prompt('Insira sua massa em quilogramas');

var imc = massa / (altura * altura);
var resultado;

if (18.5 <= imc && imc <= 24.9) {
    resultado = 'Você está saudável.';
} else {
    resultado = 'Você não está entre o intervalo ideal de IMC.';
}

alert(resultado);
