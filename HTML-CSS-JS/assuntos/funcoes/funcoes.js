// Estrutura básica de função

function myFunc(valor1, valor2) {
    // operações da função

    return valor1, valor2; // retorno da função
}

// exemplo prático

function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return media;
}

let mediaFinal1 = calcularMedia(7, 6);
console.log(`A média das notas é ${mediaFinal1}`);

// Arrow Functions

const media = (n1, n2) => {
    return (n1 + n2) / 2;
};
console.log(media(7, 6));

// exercicio função
console.log('--------------------');

function calcularIMC(altura, massa) {
    calcIMC = (massa / (altura * altura)).toFixed(2);
    console.log(calcIMC);
    if (calcIMC <= 24.9 && calcIMC >= 18.5) {
        console.log('Você está saudável');
    } else {
        console.log('Você não está saudável');
    }
}

calcularIMC(1.62, 65);
calcularIMC(1.62, 75);
