/*
5 - Faça um programa conferir sua idade. 

Se a idade for menor do que 18 anos, exiba uma mensagem informando que o usuário é menor de idade. 

Se a idade for igual ou maior do que 18 anos e menor do que 60 anos, exiba uma mensagem informando que o usuário é adulto.

Se a idade for igual ou maior do que 60 anos, exiba uma mensagem informando que o usuário é idoso.

 */

// exercício 5

var idade = 67
var saida = "O usuário é ";

if (idade < 18) {
    saida += "menor de idade"
} else if (idade < 60)  {
    saida += "adulto"
} else {
    saida += "idoso"
}

alert(saida);
