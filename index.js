const form = document.getElementById("form-contato");
const contatos = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    AdicionarLinhas();
    AtualizaContatos();
});

function AdicionarLinhas() {
    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");

    if (numeros.includes(inputNumeroContato.value)) {
        alert(`O número ${inputNumeroContato.value} já existe na lista`);
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += '<td>' + inputNomeContato.value + '</td>';
        linha += '<td>' + inputNumeroContato.value + '</td>';
        linha += '</tr>';

        linhas += linha;

        inputNomeContato.value = '';
        inputNumeroContato.value = '';
    }
}

function AtualizaContatos() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
