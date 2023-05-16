/** Exercícios do dia 08/05
 * @author Matheus Teixeira
 * */

// exercício 1.1
var variavel1 = 5
var variavel2 = 8
var soma = variavel1+variavel2
console.log(soma);

// exercício 1.2
var string1 = "Primeira String"
console.log(string1);

// exercício 1.3
var booleano = true;
console.log(booleano);

// exercício 1.4
pi = 3.1415
console.log(`a varíavel tem o tipo ${typeof(pi)} e valor ${pi}`);

// // exercício 2
// var nome = window.prompt("Qual é seu nome?")
// var idade = window.prompt("Qual é sua idade?")
// var bairro = window.prompt("Em qual bairro você mora?")
// var nome_min = nome.toLowercase()

// exercício 2.5
var num1 = Number(window.prompt("Insira o primeiro número"))
var num2 = Number(window.prompt("Insira o segundo número"))

soma = num1 + num2
alert(`O resultado é ${soma}`)

// exercício 3
var nome = "Matheus"
var nome = nome + (" de Oliveira")
alert(nome);

var nome = nome.replace("de Oliveira", "Teixeira")
alert(nome);

var resultado = nome

// exercício 4

var preco = 10

var desconto = 0.2

preco_final = preco - (preco * desconto)
console.log(preco_final);

// exercício 5

var idade = 67
var saida;

if (idade < 18) {
    saida = "Menor de idade"
} else if (idade < 60)  {
    saida = "Adulto"
} else {
    saida = "Idoso"
}

console.log(saida);

// exercício 6

if (idade >= 18) {
    console.log("Você pode Dirigir");
} else {
    console.log("Você ainda não pode dirigir");
}

// exercício 7

var numero = 10

if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é 0");
}

// exercício 8

var altura = prompt("Insira sua altura em centimetros")
var massa = prompt("Insira sua massa em quilogramas")

var imc = massa / (altura * altura)
var resultado;

if (18.5 <= imc && imc<= 24.9) {
    resultado = "Você está saudável."
} else {
    resultado = "Você não está entre o intervalo ideal de IMC."
}

alert(resultado)