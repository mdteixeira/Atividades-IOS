/**
 *
 * @author Matheus Teixeira
 *
 * O programa deve solicitar ao usuário que informe um código promocional (DESC1, DESC2, DESC3, DESC4 ou DESC5) através de um prompt.
 *
 * Usando a estrutura switch, o programa deve identificar qual foi o código promocional informado pelo usuário e aplicar o desconto correspondente ao produto.
 * Após a aplicação do desconto, o programa deve exibir o valor original do produto e o valor com desconto na tela.
 * Caso o usuário informe um código promocional inválido, o programa deve exibir uma mensagem de erro na tela.
 *
 * Exemplo de uso:
 * Suponha que um usuário informe o código promocional DESC2. Nesse caso, o programa deve exibir a mensagem "10% de desconto" na tela e aplicar um desconto de 10% no produto.
 * Em seguida, o programa deve exibir o valor original do produto (R$ 1000) e o valor com desconto (R$ 900) na tela
 *
 */

var desconto = prompt('Insira o seu cupom de desconto:'); // Recebe o cupom do usuário

switch (
    desconto.toUpperCase() // Define qual o valor do desconto a partir do cupom
) {
    case 'DESC1':
        desconto = 0.05; // 5%
        break;
    case 'DESC2':
        desconto = 0.1; // 10%
        break;
    case 'DESC3':
        desconto = 0.15; //15%
        break;
    case 'DESC4':
        desconto = 0.2; //20%
        break;
    case 'DESC5':
        desconto = 0.25; //25%
        break;

    default: // Se o usuário não digitar um cupom válido
        desconto = 0;
        alert('Cupom inválido!');
        break;
}

if (desconto > 0) { // Exibe o diálogo apenas se o usuário digitou um cupom válido

    var preco = 1000.0;
    var preco_final = preco - preco * desconto; // Calcula o preço com desconto

    alert(`O cupom lhe garante ${desconto * 100}% de desconto!`); // Retorna ao usuário o desconto
    alert(
        `O preço inicial do produto era de R$${preco}\n\nCom seu cupom de ${
            desconto * 100
        }%, o novo preço é R$${preco_final}`
    );
}
