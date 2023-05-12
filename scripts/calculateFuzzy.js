function calculateFuzzy() {
    // Obter o valor de entrada
    var height = parseFloat(document.getElementById("height").value);

    // Definir as funções de pertinência
    function verylow(x) {
        if (x < 0 || x >= 10) return 0;
        else if (x == 0) return 1;
        else if (x < 2.5) return (x - 0) / (2.5 - 0);
        else if (x < 5) return (5 - x) / (5 - 2.5);
        else return 0;
        }
        
        function low(x) {
        if (x <= 2.5 || x >= 7.5) return 0;
        else if (x < 5) return (x - 2.5) / (5 - 2.5);
        else if (x < 7.5) return (7.5 - x) / (7.5 - 5);
        else return 0;
        }
        
        function avarage(x) {
        if (x <= 5 || x >= 20) return 0;
        else if (x < 10) return (x - 5) / (10 - 5);
        else if (x < 15) return (15 - x) / (15 - 10);
        else return 0;
        }
        
        function hight(x) {
        if (x <= 10 || x >= 40) return 0;
        else if (x < 20) return (x - 10) / (20 - 10);
        else if (x < 30) return (30 - x) / (30 - 20);
        else return 0;
        }
        
        function veryHight(x) {
            if (x <= 20) return 0;
            else if (x < 25) return (x - 20) / (25 - 20);
            else return 1;
          }

    // Definir as variáveis fuzzy de entrada
    var veryLowFuzzy = verylow(height);
    var lowFuzzy = low(height);
    var avarageFuzzy = avarage(height);
    var hightFuzzy = hight(height);
    var VeryHightFuzzy = veryHight(height);


    // Definir a variável fuzzy de saída
    var classificacaoFuzzy;
    if (VeryHightFuzzy > hightFuzzy && VeryHightFuzzy > avarageFuzzy && VeryHightFuzzy > lowFuzzy && VeryHightFuzzy > veryLowFuzzy) {
        classificacaoFuzzy = "Muito alta";
    } else if (hightFuzzy > avarageFuzzy && hightFuzzy > lowFuzzy && hightFuzzy > veryLowFuzzy && hightFuzzy > VeryHightFuzzy) {
        classificacaoFuzzy = "alta";
    } else if (avarageFuzzy > hightFuzzy && avarageFuzzy > lowFuzzy && avarageFuzzy > veryLowFuzzy && avarageFuzzy > VeryHightFuzzy) {
        classificacaoFuzzy = "Média";
    } else if (lowFuzzy > veryLowFuzzy && lowFuzzy > avarageFuzzy && lowFuzzy > hightFuzzy && lowFuzzy > VeryHightFuzzy) {
        classificacaoFuzzy = "baixa";
    } else {
        classificacaoFuzzy = "Muito baixa";
        
    }

    
    

    // Exibir a classificação na página
    document.getElementById("classificacao").innerHTML = "Classificação: " + classificacaoFuzzy + "<br>( " + veryLowFuzzy.toFixed(2) + ", " + lowFuzzy.toFixed(2) + ", " + avarageFuzzy.toFixed(2) + ", " + hightFuzzy.toFixed(2) + ", " + VeryHightFuzzy.toFixed(2) + ")";
}