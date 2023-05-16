// Aula do dia 04/05/2023

var x = 10;
var y = 5;

x ++ // incremento
x -- // decremento

x += y // x = x + y
x -= y // x = x - y

// var & let

let let1 = 18
const PI = 3.1415
var var1 = "Matheus"

// let idade = 8 // Erro: não pode ser redeclarado

let1 = 19 // pode ser alterada

// PI = 3.14 // Erro: Não pode ser modificada

// const PI = 3.14 // Erro: Não pode ser redeclarado

var var1 = "Isabela" // pode ser redeclarada


// Exercício da aula

//1: Criar 3 variaveis : var, let e const

var nome = "Matheus"
let idade = 18
const documento = "55.555.555-5"

//2: Criar um Template String para mostrar os valores

var frase = `O ${nome}, com documento ${documento} tem ${idade} anos de idade.`

console.log(frase);