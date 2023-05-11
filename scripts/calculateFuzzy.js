function calculateFuzzy() {
    // Obter o valor de entrada
    var altura = parseFloat(document.getElementById("altura").value);

    // Definir as funções de pertinência
    function baixa(x) {
        if (x <= 0 || x >= 20) return 0;
        else if (x < 10) return (x - 0) / (10 - 0);
        else return (20 - x) / (20 - 10);
    }

    function media(x) {
        if (x <= 10 || x >= 30) return 0;
        else if (x < 20) return (x - 10) / (20 - 10);
        else return (30 - x) / (30 - 20);
    }

    function alta(x) {
        if (x <= 20) return 0;
        else if (x < 50) return (x - 20) / (50 - 20);
        else return 1;
    }

    // Definir as variáveis fuzzy de entrada
    var baixaFuzzy = baixa(altura);
    var mediaFuzzy = media(altura);
    var altaFuzzy = alta(altura);

    console.log(baixaFuzzy, mediaFuzzy, altaFuzzy);

    // Definir a variável fuzzy de saída
    var classificacaoFuzzy;
    if (altaFuzzy > mediaFuzzy && altaFuzzy > baixaFuzzy) {
        classificacaoFuzzy = "Alta";
    } else if (mediaFuzzy > altaFuzzy && mediaFuzzy > baixaFuzzy) {
        classificacaoFuzzy = "Média";
    } else {
        classificacaoFuzzy = "Baixa";
    }

    // Exibir a classificação na página
    document.getElementById("classificacao").innerHTML = "Classificação: " + classificacaoFuzzy;
}