class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

let carro1 = new Carro('Audi', 'A1', 2020)
let carro2 = new Carro('Volvo', 'c30', 2011)

console.log(carro1.marca, carro1.modelo, carro1.ano);
console.log(carro2.marca, carro2.modelo, carro2.ano);
console.log('-----------------------');

for (i in carro1) {
    console.log(carro1[i]);
}

class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
    }
}

let matheus = new Pessoa('Matheus', 18, new Date(2004, 0, 15))

console.log(matheus);

