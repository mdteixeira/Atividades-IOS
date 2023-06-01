let pessoa = {
    nome: 'Matheus',
    sobrenome: 'Teixeira',
    idade: 18,
    categoria: 'Aluno',
    curso: 'Programação Web',
    conteudo: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
    endereco: {
        cep: '05545-030',
        rua: 'Rua das Jabuticabas',
        numero: '320',
        complemento: '',
    },
};
let pessoa2 = {
    nome: 'Isabela',
    sobrenome: 'Serrano',
    idade: 18,
    categoria: 'Aluno',
    curso: 'Odontologia',
    conteudo: [
        'Sistemas de saúde',
        'Suporte básico de Vida',
        'Anatomia Cabeça/pescoço',
        'Anatomia Dental',
        'Atendimento Humanizado',
    ],

    endereco: {
        cep: '03535-030',
        rua: 'Alameda das Capivaras',
        numero: '10',
        complemento: 'Apartamento 32B',
    },
};

let pessoa3 = {
    nome: 'Ermerson',
    sobrenome: 'Barros',
    idade: 25,
    categoria: 'Professor',
    curso: 'Programação Web',
    conteudo: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],

    endereco: {
        cep: '02256-030',
        rua: 'Avenida Patos Amarelos',
        numero: '3501',
        complemento: 'Apartamento 15 Bloco C',
    },
};

function printAll() {
    console.log(pessoa);
    console.log(pessoa2);
    console.log(pessoa3);
    console.log('');
}

function printPessoa(pessoa) {
    console.log(
    `A pessoa é: ${pessoa.nome + ' ' + pessoa.sobrenome}, que tem ${pessoa.idade
    } anos.`
);
    console.log(
    `A pessoa está cursando: ${pessoa.curso}, que tem como conteúdo ${pessoa.conteudo}.`
);
console.log(
    `O endereço de ${pessoa.nome + ' ' + pessoa.sobrenome} é: ${pessoa.endereco.rua + ', ' + pessoa.endereco.numero}`
);
console.log('');
}

// printAll()

// printPessoa(pessoa)
// printPessoa(pessoa2)
// printPessoa(pessoa3)

// aula de 16-05

// Array de Objetos
const {
    nome,
    sobrenome,
    idade,
    endereco: {rua},
    endereco: {numero},
} = pessoa

console.log(`Olá ${nome + ' ' + sobrenome}! Você tem ${idade} anos.`);
console.log(`Você mora em: ${rua}, ${numero}`);