const carregarEndereco = function () {
    let endereco = JSON.parse(
        sessionStorage.getItem('endereco')
    );
    document.getElementById('rua').innerText = endereco.rua;
    document.getElementById('cidade').innerText = endereco.cidade;
    document.getElementById('estado').innerText = endereco.estado;
    document.getElementById('cep').innerText = endereco.cep;
}

const carregarProdutos = function () {
    let produtos = JSON.parse(
        sessionStorage.getItem('produtos')
    );
    document.getElementById('produto1').innerText = produtos.havaianas;
    document.getElementById('quantidade1').innerText = produtos.havaianas.quantidade;
    document.getElementById('preco1').innerText = produtos.havaianas.preco;
    document.getElementById('produto2').innerText = produtos.alpargatas;
    document.getElementById('quantidade2').innerText = produtos.alpargatas.quantidade;
    document.getElementById('preco2').innerText = produtos.alpargatas.preco;
}

carregarEndereco();