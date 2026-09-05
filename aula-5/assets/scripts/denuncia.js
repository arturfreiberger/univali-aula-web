document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("form-data-hora");

    if (!form) {
        return;
    }

    carregarDataHora();

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const dados = {
            data: document.getElementById("data-fato").value,

            dataAproximada:
                document.getElementById("data-aproximada").checked,

            hora:
                document.getElementById("hora-fato").value,

            minuto:
                document.getElementById("minuto-fato").value,

            horaAproximada:
                document.getElementById("hora-aproximada").checked
        };

        sessionStorage.setItem(
            "dataHoraFato",
            JSON.stringify(dados)
        );

        window.location.href = "local.html";
    });

});

function carregarDataHora() {

    const salvo = sessionStorage.getItem("dataHoraFato");

    if (!salvo) {
        return;
    }

    const dados = JSON.parse(salvo);

    document.getElementById("data-fato").value =
        dados.data || "";

    document.getElementById("data-aproximada").checked =
        dados.dataAproximada || false;

    document.getElementById("hora-fato").value =
        dados.hora || "";

    document.getElementById("minuto-fato").value =
        dados.minuto || "";

    document.getElementById("hora-aproximada").checked =
        dados.horaAproximada || false;
}

const formLocal = document.getElementById("form-local");

if (formLocal) {

    carregarLocal();

    formLocal.addEventListener("submit", function (event) {

        event.preventDefault();

        const dadosLocal = {
            logradouro:
                document.getElementById("logradouro").value,

            numero:
                document.getElementById("numero").value,

            bairro:
                document.getElementById("bairro").value,

            cidade:
                document.getElementById("cidade").value
        };

        sessionStorage.setItem(
            "localFato",
            JSON.stringify(dadosLocal)
        );

        window.location.href = "envolvidos.html";
    });
}

function carregarLocal() {

    const salvo = sessionStorage.getItem("localFato");

    if (!salvo) {
        return;
    }

    const dados = JSON.parse(salvo);

    document.getElementById("logradouro").value =
        dados.logradouro || "";

    document.getElementById("numero").value =
        dados.numero || "";

    document.getElementById("bairro").value =
        dados.bairro || "";

    document.getElementById("cidade").value =
        dados.cidade || "";
}

const formEnvolvido =
    document.getElementById("form-envolvido");

if (formEnvolvido) {

    let envolvidos =
        JSON.parse(sessionStorage.getItem("envolvidos")) || [];


    atualizarListaEnvolvidos();


    formEnvolvido.addEventListener("submit", function (event) {

        event.preventDefault();


        const nome =
            document.getElementById("nome-envolvido").value.trim();

        const tipo =
            document.getElementById("tipo-envolvido").value;

        const cpf =
            document.getElementById("cpf-envolvido").value.trim();


        const envolvido = {
            nome: nome,
            tipo: tipo,
            cpf: cpf
        };


        envolvidos.push(envolvido);


        sessionStorage.setItem(
            "envolvidos",
            JSON.stringify(envolvidos)
        );


        formEnvolvido.reset();

        atualizarListaEnvolvidos();

    });


    function atualizarListaEnvolvidos() {

        const lista =
            document.getElementById("lista-envolvidos");

        lista.innerHTML = "";


        envolvidos.forEach(function (envolvido, indice) {

            const item = document.createElement("div");

            item.classList.add("envolvido-item");


            item.innerHTML = `
                <div class="dados-envolvido">

                    <strong>
                        ${envolvido.nome}
                    </strong>

                    <span>
                        ${formatarTipoEnvolvido(envolvido.tipo)}
                    </span>

                    ${
                        envolvido.cpf
                            ? `<span>CPF: ${envolvido.cpf}</span>`
                            : ""
                    }

                </div>

                <button
                    type="button"
                    class="remover-envolvido"
                    data-indice="${indice}"
                >
                    Remover
                </button>
            `;


            lista.appendChild(item);

        });


        const botoesRemover =
            document.querySelectorAll(".remover-envolvido");


        botoesRemover.forEach(function (botao) {

            botao.addEventListener("click", function () {

                const indice =
                    Number(botao.dataset.indice);

                envolvidos.splice(indice, 1);


                sessionStorage.setItem(
                    "envolvidos",
                    JSON.stringify(envolvidos)
                );


                atualizarListaEnvolvidos();

            });

        });

    }


    document
        .getElementById("proxima-etapa-envolvidos")
        .addEventListener("click", function () {

            if (envolvidos.length === 0) {

                alert("Adicione pelo menos um envolvido.");

                return;
            }


            window.location.href = "veiculos.html";

        });

}

function formatarTipoEnvolvido(tipo) {

    const tipos = {
        condutor: "Condutor",
        passageiro: "Passageiro",
        pedestre: "Pedestre",
        proprietario: "Proprietário do veículo",
        outro: "Outro"
    };

    return tipos[tipo] || tipo;
}

const formVeiculo =
    document.getElementById("form-veiculo");

if (formVeiculo) {

    let veiculos =
        JSON.parse(sessionStorage.getItem("veiculos")) || [];


    atualizarListaVeiculos();


    formVeiculo.addEventListener("submit", function (event) {

        event.preventDefault();


        const veiculo = {

            placa:
                document.getElementById("placa-veiculo").value
                    .trim()
                    .toUpperCase(),

            marca:
                document.getElementById("marca-veiculo").value.trim(),

            modelo:
                document.getElementById("modelo-veiculo").value.trim(),

            cor:
                document.getElementById("cor-veiculo").value.trim()
        };


        veiculos.push(veiculo);


        sessionStorage.setItem(
            "veiculos",
            JSON.stringify(veiculos)
        );


        formVeiculo.reset();

        atualizarListaVeiculos();

    });


    function atualizarListaVeiculos() {

        const lista =
            document.getElementById("lista-veiculos");

        lista.innerHTML = "";


        veiculos.forEach(function (veiculo, indice) {

            const item = document.createElement("div");

            item.classList.add("veiculo-item");


            item.innerHTML = `
                <div class="dados-veiculo">

                    <strong>
                        ${veiculo.placa}
                    </strong>

                    <span>
                        ${veiculo.marca} ${veiculo.modelo}
                    </span>

                    ${
                        veiculo.cor
                            ? `<span>Cor: ${veiculo.cor}</span>`
                            : ""
                    }

                </div>

                <button
                    type="button"
                    class="remover-veiculo"
                    data-indice="${indice}"
                >
                    Remover
                </button>
            `;


            lista.appendChild(item);

        });


        const botoesRemover =
            document.querySelectorAll(".remover-veiculo");


        botoesRemover.forEach(function (botao) {

            botao.addEventListener("click", function () {

                const indice =
                    Number(botao.dataset.indice);

                veiculos.splice(indice, 1);


                sessionStorage.setItem(
                    "veiculos",
                    JSON.stringify(veiculos)
                );


                atualizarListaVeiculos();

            });

        });

    }


    document
        .getElementById("proxima-etapa-veiculos")
        .addEventListener("click", function () {

            if (veiculos.length === 0) {

                alert("Adicione pelo menos um veículo.");

                return;
            }


            window.location.href = "relato.html";

        });

}

const formRelato =
    document.getElementById("form-relato");

if (formRelato) {

    const campoRelato =
        document.getElementById("relato-fato");

    const contador =
        document.getElementById("contador-caracteres");


    carregarRelato();

    atualizarContador();


    campoRelato.addEventListener("input", function () {

        atualizarContador();

    });


    formRelato.addEventListener("submit", function (event) {

        event.preventDefault();

        const relato = campoRelato.value.trim();

        sessionStorage.setItem(
            "relatoFato",
            relato
        );

        window.location.href = "confirmacao.html";

    });


    function atualizarContador() {

        contador.textContent =
            campoRelato.value.length;

    }

}

function carregarRelato() {

    const salvo =
        sessionStorage.getItem("relatoFato");

    if (!salvo) {
        return;
    }

    document.getElementById("relato-fato").value =
        salvo;

}

const botaoFinalizar =
    document.getElementById("finalizar-denuncia");

if (botaoFinalizar) {

    carregarConfirmacao();

    botaoFinalizar.addEventListener("click", function () {

        alert("Denúncia registrada com sucesso.");

        sessionStorage.removeItem("dataHoraFato");
        sessionStorage.removeItem("localFato");
        sessionStorage.removeItem("envolvidos");
        sessionStorage.removeItem("veiculos");
        sessionStorage.removeItem("relatoFato");

        window.location.href = "denuncia.html";

    });

}

function carregarConfirmacao() {

    const dataHora =
        JSON.parse(sessionStorage.getItem("dataHoraFato")) || {};

    const local =
        JSON.parse(sessionStorage.getItem("localFato")) || {};

    const envolvidos =
        JSON.parse(sessionStorage.getItem("envolvidos")) || [];

    const veiculos =
        JSON.parse(sessionStorage.getItem("veiculos")) || [];

    const relato =
        sessionStorage.getItem("relatoFato") || "";


    /* =========================
       DATA E HORA
       ========================= */

    document.getElementById("confirmacao-data").textContent =
        formatarData(dataHora.data)
        + (dataHora.dataAproximada ? " (aproximada)" : "");


    const horaFormatada =
        dataHora.hora && dataHora.minuto
            ? dataHora.hora.padStart(2, "0")
                + ":"
                + dataHora.minuto.padStart(2, "0")
            : "Não informada";


    document.getElementById("confirmacao-hora").textContent =
        horaFormatada
        + (dataHora.horaAproximada ? " (aproximada)" : "");


    /* =========================
       LOCAL
       ========================= */

    document.getElementById("confirmacao-logradouro").textContent =
        local.logradouro || "Não informado";

    document.getElementById("confirmacao-numero").textContent =
        local.numero || "Não informado";

    document.getElementById("confirmacao-bairro").textContent =
        local.bairro || "Não informado";

    document.getElementById("confirmacao-cidade").textContent =
        local.cidade || "Não informada";


    /* =========================
       ENVOLVIDOS
       ========================= */

    const containerEnvolvidos =
        document.getElementById("confirmacao-envolvidos");

    containerEnvolvidos.innerHTML = "";


    if (envolvidos.length === 0) {

        containerEnvolvidos.textContent =
            "Nenhum envolvido informado.";

    } else {

        envolvidos.forEach(function (envolvido) {

            const item =
                document.createElement("div");

            item.classList.add("item-resumo");


            item.innerHTML = `
                <strong>${envolvido.nome}</strong>

                <span>
                    Tipo: ${formatarTipoEnvolvido(envolvido.tipo)}
                </span>

                ${
                    envolvido.cpf
                        ? `<span>CPF: ${envolvido.cpf}</span>`
                        : ""
                }
            `;


            containerEnvolvidos.appendChild(item);

        });

    }


    /* =========================
       VEÍCULOS
       ========================= */

    const containerVeiculos =
        document.getElementById("confirmacao-veiculos");

    containerVeiculos.innerHTML = "";


    if (veiculos.length === 0) {

        containerVeiculos.textContent =
            "Nenhum veículo informado.";

    } else {

        veiculos.forEach(function (veiculo) {

            const item =
                document.createElement("div");

            item.classList.add("item-resumo");


            item.innerHTML = `
                <strong>${veiculo.placa}</strong>

                <span>
                    ${veiculo.marca} ${veiculo.modelo}
                </span>

                ${
                    veiculo.cor
                        ? `<span>Cor: ${veiculo.cor}</span>`
                        : ""
                }
            `;


            containerVeiculos.appendChild(item);

        });

    }


    /* =========================
       RELATO
       ========================= */

    document.getElementById("confirmacao-relato").textContent =
        relato || "Nenhum relato informado.";

}

function formatarData(data) {

    if (!data) {
        return "Não informada";
    }

    const partes = data.split("-");

    if (partes.length !== 3) {
        return data;
    }

    return partes[2]
        + "/"
        + partes[1]
        + "/"
        + partes[0];

}