function salvarEndereco() {
    sessionStorage.setItem('rua', document.getElementById('rua').value);
    sessionStorage.setItem('cidade', document.getElementById('cidade').value);
    sessionStorage.setItem('estado', document.getElementById('estado').value);
    sessionStorage.setItem('cep', document.getElementById('cep').value);
}

const carregarEndereco = function () {
    let rua = sessionStorage.getItem('rua');
    let cidade = sessionStorage.getItem('cidade');
    let estado = sessionStorage.getItem('estado');
    let cep = sessionStorage.getItem('cep');

    let endereco = `Rua ${rua}
    \nCidade ${cidade}
    \nEstado ${estado}
    \nCEP ${cep}`;

    console.log(endereco);
}