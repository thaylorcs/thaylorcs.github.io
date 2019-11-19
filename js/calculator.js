  
    var totalRendimentos = document.getElementById("total-rendimentos");
    var qtdDependentes = document.getElementById("qtd-dependentes");
    var valorDependentes = document.getElementById("valor-dependentes");
    var valorInss = document.getElementById("val-inss");
    var despesasMedicas = document.getElementById("desp-medicas");
    var despesasInstrucao = document.getElementById("desp-instrucao");
    var pensaoJudicial = document.getElementById("pensao-judicial");
    var previdencia = document.getElementById("previdencia");
    var aposentado = document.getElementById("aposentado");
    var totalDeducoes = document.getElementById("total-deducoes");
    var baseCalculo = document.getElementById("base-calculo");
    var aliquota = document.getElementById("aliquota");
    var impostoDevido = document.getElementById("imposto");
    var valorDoacao = document.getElementById("valor-doacao");

    function currencyToFloat(valor){
        
        // var number = Number(valor.toString().replace(/[^0-9.-]+/g,""));
        // console.log(number);
        realFloat = valor.toString().replace(/[^0-9,-]+/g,"");
        // console.log(realFloat);
        realFloat = realFloat.replace(",", ".");
        // console.log(realFloat);
        // console.log(realFloat = valor.replace(".", ""));
        // console.log(realFloat = realFloat.replace(",", "."));
        
        return parseFloat(realFloat);
    }

    function calcDependentes() {
        

        if(qtdDependentes.value > 0 && qtdDependentes.value != 0){        
            valorDependentes.value = qtdDependentes.value * 2275.08;  
            // valorDependentes.value = valorDependentes.value.replace(".", ",");
            vFloat = +(valorDependentes.value.replace(",", "."));
            
            valorDependentes.value = floatMoeda(vFloat);
            
        }
        else {
            qtdDependentes.value = 0;
            valorDependentes.value = "0,00";
            vFloat = 0;
        }

        calcTotal();
    }

    function isEmpty(){
        if(qtdDependentes.value == "" || qtdDependentes.value == null) qtdDependentes.value = 0;
            
        if(valorDependentes.value == "" || valorDependentes.value == null) valorDependentes.value = "0,00";
            
        if(valorInss.value =="" || valorInss.value == null) valorInss.value = "0,00";
            
        if(despesasMedicas.value =="" || despesasMedicas.value == null) despesasMedicas.value = "0,00";
            
        if(despesasInstrucao.value =="" || despesasInstrucao.value == null) despesasInstrucao.value = "0,00";
            
        if(pensaoJudicial.value =="" || pensaoJudicial.value == null) pensaoJudicial.value = "0,00";
            
        if(previdencia.value =="" || previdencia.value == null) previdencia.value = "0,00";
            
        if(aposentado.value =="" || aposentado.value == null) aposentado.value = "0,00";
    }

    function calcTotal() {

        isEmpty();

        inssFloat = currencyToFloat(valorInss.value);
        isEmpty();
        despesasMedFloat = currencyToFloat(despesasMedicas.value);
        isEmpty();
        despesasInstFloat = currencyToFloat(despesasInstrucao.value);
        isEmpty();
        pensaoJudicialFloat = currencyToFloat(pensaoJudicial.value);
        isEmpty();
        previdenciaFloat = currencyToFloat(previdencia.value);
        isEmpty();
        aposentadoFloat = currencyToFloat(aposentado.value);
        isEmpty();
        // vFloat = 0.00;
        
        // console.log(typeof inssFloat);
        // console.log(inssFloat);
        // console.log(typeof despesasMedFloat);
        // console.log(despesasMedFloat);
        // console.log(typeof despesasInstFloat);
        // console.log(despesasInstFloat);
        // console.log(typeof pensaoJudicialFloat);
        // console.log(pensaoJudicialFloat);
        // console.log(typeof aposentadoFloat);
        // console.log(aposentadoFloat);
        

        tDeducoes = (inssFloat + despesasMedFloat + despesasInstFloat + pensaoJudicialFloat + previdenciaFloat + aposentadoFloat + vFloat).toFixed(2);
        tDeducoes = +(tDeducoes);
        
        // if(tDeducoes == 0){
        //     tDeducoes = "0,00";
        // }

        // else if(isNaN(tDeducoes)){
        //     tDeducoes = "0,00";
        // }

        totalDeducoes.value = floatMoeda(tDeducoes);

        rendimentos = currencyToFloat(totalRendimentos.value);
        deducao = currencyToFloat(totalDeducoes.value);
        // console.log("Essa é a dedução: " + deducao);
        base = rendimentos - tDeducoes;
        imposto = 0.00
        impostoDevido.value = imposto;


        if (base < 0) base = 0.00;

        if(base <= 22847.76){
            deducao = 0.00;
            imposto = 0.00;
            aliquota.value = 0.00;
        }

        else if(base >= 22847.77 && base <= 33919.80){
            deducao = 1713.58;
            imposto = ((base * 7.5/100) - deducao).toFixed(2);
            aliquota.value = floatMoeda(deducao);
        } else if(base >= 33919.81 && base <= 45012.60){
            deducao = 4257.57;
            imposto = ((base * 15/100) - deducao).toFixed(2);
            aliquota.value = floatMoeda(deducao);
        } else if(base >= 45012.61 && base <= 55976.16){
            deducao = 7633.51;
            imposto = ((base * 22.5/100) - deducao).toFixed(2);
            aliquota.value = floatMoeda(deducao);
        } else if(base > 55976.16){
            deducao = 10432.32;
            imposto = ((base * 27.5/100) - deducao).toFixed(2);
            aliquota.value = floatMoeda(deducao);
        }

        impostoDevido.value = floatMoeda(imposto);
        baseCalculo.value = (base);
        doacao = (currencyToFloat(impostoDevido.value) * 6/100).toFixed(2);
        valorDoacao.value = floatMoeda(doacao);
        // valorDoacao.value = valorDoacao.value.Math.round();        
    }

    function floatMoeda(valor){
        var inteiro = null, decimal = null, c = null, j = null;
        var aux = new Array();
        valor = ""+valor;
        c = valor.indexOf(".", 0);

        if(c > 0){
            inteiro = valor.substring (0, c);
            decimal = valor.substring(c+1, valor.length);
        } else {
            inteiro = valor;
        }

        for(j = inteiro.length, c = 0; j > 0; j-=3, c++){
            aux[c] = inteiro.substring(j-3, j);

        }

        inteiro = "";
        for(c = aux.length -1; c >=0; c--){
            inteiro += aux[c]+'.';
        }

        inteiro = inteiro.substring(0, inteiro.length-1);

        decimal = parseInt(decimal); 

        if(isNaN(decimal)){
            decimal = "00";
        } else{
            decimal = ""+decimal;
            if(decimal.length === 1) {
                decimal = decimal+"0";
            }
        }

        valor = inteiro + "," + decimal;

        return valor;

    }