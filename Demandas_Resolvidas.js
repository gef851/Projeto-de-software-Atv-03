// DemandasResolvidas.js

document.addEventListener("DOMContentLoaded", () => {
    carregarDemandasResolvidas();
    configurarPesquisa();
});

// Carregar demandas resolvidas
function carregarDemandasResolvidas() {

    const demandas =
        JSON.parse(localStorage.getItem("ocorrencias")) || [];

    const demandasResolvidas = demandas.filter(
        demanda => demanda.status === "Concluído"
    );

    preencherTabela(demandasResolvidas);
    atualizarResumo(demandasResolvidas);
}

// Preencher tabela
function preencherTabela(demandas) {

    const tbody =
        document.querySelector("#tabelaDemandas tbody");

    tbody.innerHTML = "";

    if (demandas.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center;">
                    Nenhuma demanda resolvida encontrada.
                </td>
            </tr>
        `;

        return;
    }

    demandas.forEach(demanda => {

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td class="protocolo">
                ${demanda.protocolo}
            </td>

            <td>
                ${demanda.bairro}
            </td>

            <td>
                ${demanda.tipo}
            </td>

            <td>
                ${demanda.dataAbertura || "-"}
            </td>

            <td>
                ${demanda.dataConclusao || "-"}
            </td>

            <td>
                <span class="status-concluido">
                    Concluído
                </span>
            </td>
        `;

        tbody.
