/* 
1 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar 
um novo array contendo o dobro de cada elemento
*/
console.log('Exercício 1 ---------------');

let numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.map((nn) => nn * 2);

console.log(numbers);
console.log(newNumbers);

////////////////////////////////////////////////////////////////////////////////////

console.log('\nExercício 2 ---------------');
/*
2 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método filter para criar 
um novo array contendo apenas os números pares.
*/
numbers = [1, 2, 3, 4, 5];

let parNumbers = numbers.filter((pn) => pn % 2 == 0);

console.log(parNumbers);

////////////////////////////////////////////////////////////////////////////////////

console.log('\nExercício 3 ---------------');
/*
3 - Dado o array fruits = ['apple', 'banana', 'orange', 'kiwi'], utilize o método 
forEach para exibir cada fruta no console.
*/
let fruits = ['apple', 'banana', 'orange', 'kiwi'];

fruits.forEach((item) => console.log(item));

////////////////////////////////////////////////////////////////////////////////////

console.log('\nExercício 4 ---------------');
/*
4 - Dado o array students = [
{ name: 'John', age: 20 },
{ name: 'Jane', age: 25 }, 
{ name: 'Mark', age: 22 }
], 
Utilize o método forEach para exibir o nome e a idade de cada aluno no 
console.
*/

var students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 },
    { name: 'Mark', age: 22 },
];

students.forEach((item) => {
    console.log(`Aluno: ${item.name} \t| idade: ${item.age}`);
});

////////////////////////////////////////////////////////////////////////////////////

console.log('\nExercício 5 ---------------');
/*
5 - Dado o array students = [
{ name: 'John', age: 20 },
{ name: 'Jane', age: 25 },
{ name: 'Mark', age: 22 }
], 
Utilize o método map para criar um novo array contendo apenas os nomes 
dos alunos.
*/

students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 },
    { name: 'Mark', age: 22 },
];

let newStudents = students.map((item) => {
    let arrayNovo = [];
    arrayNovo += item.name;
    return arrayNovo;
});

console.log(newStudents);
