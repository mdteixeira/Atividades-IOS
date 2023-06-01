// Exercício de objetos

let carro1 = {
    tipo: 'SUV',
    marca: 'Lamborghini',
    modelo: 'Urus',
    cor: 'amarelo',
    ano: 2023,
};

let carro2 = {
    tipo: 'esportivo',
    marca: 'Ferrari',
    modelo: '812 Superfast',
    cor: 'vermelho',
    ano: 2021,
};

let carro3 = {
    tipo: '4x4',
    marca: 'Mercedes',
    modelo: 'G64',
    cor: 'preto',
    ano: 2020,
};

let carro4 = {
    tipo: 'classico',
    marca: 'Volkswagen',
    modelo: 'Fusca',
    cor: 'azul',
    ano: 1994,
};

const { modelo: modelo1, ano: ano1 } = carro1;
const { modelo: modelo2, ano: ano2 } = carro2;
const { modelo: modelo3, ano: ano3 } = carro3;
const { modelo: modelo4, ano: ano4 } = carro4;

pagaIPVA = 2023 - ano1 <= 20;
console.log('Carro 1: ', modelo1, 'paga IPVA?', pagaIPVA);

pagaIPVA = 2023 - ano2 <= 20;
console.log('Carro 2: ', modelo2, 'paga IPVA?', pagaIPVA);

pagaIPVA = 2023 - ano3 <= 20;
console.log('Carro 3: ', modelo3, 'paga IPVA?', pagaIPVA);

pagaIPVA = 2023 - ano4 <= 20;
console.log('Carro 4: ', modelo4, 'paga IPVA?', pagaIPVA);

// Lista de objetos

tarefas = [
    {
        id: 'atv1',
        desc: 'Fazer site',
        feito: true,
    },
    {
        id: 'atv2',
        desc: 'Estudar Java',
        feito: false,
    },
    {
        id: 'atv2',
        desc: 'Fazer curso Python',
        feito: false,
    },
];

console.log('-----------------------------');
console.log(tarefas[0].desc, '\t\t\t\t', tarefas[0].feito);
console.log(tarefas[1].desc, '\t\t\t', tarefas[1].feito);
console.log(tarefas[2].desc, '\t\t', tarefas[2].feito);
console.log('-----------------------------');
let texto_JSON = JSON.stringify(tarefas); // transforma em string para exportar/uso externo
console.log(texto_JSON, '\né um', typeof texto_JSON);
console.log('-----------------------------');
let parse_JSON = JSON.parse(texto_JSON); // Volta para objeto utilizavel
console.log(parse_JSON, '\né um', typeof parse_JSON);
