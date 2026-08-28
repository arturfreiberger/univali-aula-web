const carregarEndereco = function () {
    let endereco = JSON.parse(
        sessionStorage.getItem('endereco')
    );
    document.getElementById('rua').innerText = endereco.rua;
    document.getElementById('cidade').innerText = endereco.cidade;
    document.getElementById('estado').innerText = endereco.estado;
    document.getElementById('cep').innerText = endereco.cep;
}

carregarEndereco();