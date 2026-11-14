// Função para gerar protocolo de demanda
function gerarCodigoDemanda(tipoProblema) {
    
    const data = new Date();

    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");

    // Número aleatório de 5 dígitos
    const numero = Math.floor(10000 + Math.random() * 90000);

    // Sigla do tipo de problema
    const siglas = {
        "Buraco": "BUR",
        "Iluminacao": "ILU",
        "Limpeza": "LIM",
        "Poda": "POD",
        "Outros": "OUT"
    };

    const sigla = siglas[tipoProblema] || "GER";

    return `${sigla}-${ano}${mes}${dia}-${numero}`;
}

// Exemplo de uso
const protocolo = gerarCodigoDemanda("Buraco");

console.log("Protocolo gerado:", protocolo);
