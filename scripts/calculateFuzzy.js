function calculateFuzzy() {
    // Obter o valor de entrada
    var altura = parseFloat(document.getElementById("altura").value);

    // Definir as funções de pertinência
    function muitoBaixa(x) {
        if (x <= 0 || x >= 10) return 0;
        else if (x < 2.5) return (x - 0) / (2.5 - 0);
        else if (x < 5) return (5 - x) / (5 - 2.5);
        else return 0;
        }
        
        function baixa(x) {
        if (x <= 2.5 || x >= 7.5) return 0;
        else if (x < 5) return (x - 2.5) / (5 - 2.5);
        else if (x < 7.5) return (7.5 - x) / (7.5 - 5);
        else return 0;
        }
        
        function media(x) {
        if (x <= 5 || x >= 20) return 0;
        else if (x < 10) return (x - 5) / (10 - 5);
        else if (x < 15) return (15 - x) / (15 - 10);
        else return 0;
        }
        
        function alta(x) {
        if (x <= 10 || x >= 40) return 0;
        else if (x < 20) return (x - 10) / (20 - 10);
        else if (x < 30) return (30 - x) / (30 - 20);
        else return 0;
        }
        
        function muitoAlta(x) {
            if (x <= 20) return 0;
            else if (x < 25) return (x - 20) / (25 - 20);
            // else if (x < 30) return (30 - x) / (30 - 25);
            else return 1;
          }
        // function muitoAlta(x) {
        // if (x <= 20) return 0;
        //  else if (x < 50) return (x - 30) / (50 - 30);
        // // else if (x < 60) return (60 - x) / (60 - 50);
        // // 
        // else return 1;
        // }

    // Definir as variáveis fuzzy de entrada
    var muitoBaixaFuzzy = muitoBaixa(altura);
    var baixaFuzzy = baixa(altura);
    var mediaFuzzy = media(altura);
    var altaFuzzy = alta(altura);
    var muitoAltaFuzzy = muitoAlta(altura);


    // Definir a variável fuzzy de saída
    var classificacaoFuzzy;
    if (muitoAltaFuzzy > altaFuzzy && muitoAltaFuzzy > mediaFuzzy && muitoAltaFuzzy > baixaFuzzy && muitoAltaFuzzy > muitoBaixaFuzzy) {
        classificacaoFuzzy = "Muito alta";
    } else if (altaFuzzy > mediaFuzzy && altaFuzzy > baixaFuzzy && altaFuzzy > muitoBaixaFuzzy && altaFuzzy > muitoAltaFuzzy) {
        classificacaoFuzzy = "Alta";
    } else if (mediaFuzzy > altaFuzzy && mediaFuzzy > baixaFuzzy && mediaFuzzy > muitoBaixaFuzzy && mediaFuzzy > muitoAltaFuzzy) {
        classificacaoFuzzy = "Média";
    } else if (baixaFuzzy > muitoBaixaFuzzy && baixaFuzzy > mediaFuzzy && baixaFuzzy > altaFuzzy && baixaFuzzy > muitoAltaFuzzy) {
        classificacaoFuzzy = "Baixa";
    } else {
        classificacaoFuzzy = "Muito baixa";
        
    }

    
    

    // Exibir a classificação na página
    document.getElementById("classificacao").innerHTML = "Classificação: " + classificacaoFuzzy + "<br>( " + muitoBaixaFuzzy.toFixed(2) + ", " + baixaFuzzy.toFixed(2) + ", " + mediaFuzzy.toFixed(2) + ", " + altaFuzzy.toFixed(2) + ", " + muitoAltaFuzzy.toFixed(2) + ")";
}