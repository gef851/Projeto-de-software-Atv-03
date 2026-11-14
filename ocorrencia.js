// ocorrencia.js

document.addEventListener("DOMContentLoaded", () => {

    const btnRegistrar = document.getElementById("btnRegistrar");

    if (btnRegistrar) {
        btnRegistrar.addEventListener("click", registrarOcorrencia);
    }

});

function registrarOcorrencia() {

    const nome = document.getElementById("nome").value.trim();
    const bairro = document.getElementById("bairro").value.trim();
    const tipo = document.getElementById("tipo").value;
    const descricao = document.getElementById("descricao").value.trim();

    if (!nome || !bairro || !descricao) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    const protocolo = gerarProtocolo();

    const ocorrencia = {
        protocolo: protocolo,
        nome: nome,
        bairro: bairro,
        tipo: tipo,
        descricao: descricao,
        status: "Recebido",
        data: new Date().toLocaleString("pt-BR")
    };

    salvarOcorrencia(ocorrencia);

    exibirResultado(ocorrencia);

    document.getElementById("formOcorrencia").reset();
}

function gerarProtocolo() {

    const data = new Date();

    const ano = data.getFullYear();

    const numero = Math.floor(Math.random() * 100000)
        .toString()
        .padStart(5, "0");

    return `CB-${ano}-${numero}`;
}

function salvarOcorrencia(ocorrencia) {

    let ocorrencias =
        JSON.parse(localStorage.getItem("ocorrencias")) || [];

    ocorrencias.push(ocorrencia);

    localStorage.setItem(
        "ocorrencias",
        JSON.stringify(ocorrencias)
    );
}

function exibirResultado(ocorrencia) {

    const resultado =
        document.getElementById("resultado");

    resultado.innerHTML = `
        <div class="protocolo">
            <h3>Ocorrência Registrada
