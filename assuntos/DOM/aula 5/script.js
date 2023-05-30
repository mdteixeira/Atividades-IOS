let elemento = document.querySelector('p');

elemento.style.color = 'pink';

let elemento2 = document.querySelector('#lista1');

elemento2.style.backgroundColor = '#eee';

let parClasse = (document.querySelector('p#leadP').innerHTML =
    'Texto editado pelo JavaScript!');

let botao1 = document.querySelector('#botao1');

// Eventos

function cliquei() {
    botao1.classList = 'btn btn-outline-dark';
}

function cliqueiD() {
    botao1.classList = 'btn btn-primary';
}

let lista2 = document.querySelectorAll('ol li');
badge = document.querySelector('#index');
let i = 0;

function limparSelecao() {
    lista2[i - 1].style.backgroundColor = '';
    i = 0;
    badge.classList = 'badge bg-info text-white';
    badge.innerHTML = 'limpo';
    const myTimeout = setTimeout(voltarI, 1500);
    myTimeout;
}
function voltarI() {
    badge.classList = 'badge bg-dark-subtle text-black';
    badge.innerHTML = 'i';
}

function andarLista() {
    if (i > lista2.length - 1) {
        i = 0;
        lista2[4].style.backgroundColor = '';
    }
    badge.innerHTML = i + 1;
    lista2[i].style.backgroundColor = 'limegreen';
    i++;
    lista2[i - 2].style.backgroundColor = '';
}

// vários elementos de uma vez

let variosElementos = document.querySelectorAll('');
