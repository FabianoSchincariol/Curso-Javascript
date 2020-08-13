// if ....   if and else .... switch

/*
    if ...  if e else
    Uma declaração condicional é um conjunto de comandos que são executados 
    caso uma condição especificada seja verdadeira. O JavaScript suporta
    duas declarações condicionais: if...else e switch.

    if (condicao) 
         declaracao_1;
    
    
    if (condicao) {
         declaracao_1;
         declaracao_2;
    }
    
    if (condicao) {
         declaracao_1;
    } else {
        declaracao_2;
    }

    if (condicao) {
        declaracao_1;
    } else if (condicao_2) {
        declaracao_2;
    } else if (condicao_n) {
        declaracao_n;
    } else {
        declaracao_final;
    }

    function verifiqueDados() {
        if (document.form1.tresCaracteres.value.length == 3) {
            return true;
        } else {
                alert("Informe exatamente três caracteres. " +
                document.form1.tresCaracteres.value + " não é válido.");
                return false;
        }
    }

    Switch
    Uma declaração switch permite que um programa avalie uma expressão 
    e tente associar o valor da expressão ao rótulo de um case. Se uma 
    correspondência é encontrada, o programa executa a declaração associada.

    switch (expressao) {
        case rotulo_1:
            declaracoes_1
            [break;]
        case rotulo_2:
             declaracoes_2
            [break;]
        ...
        default:
            declaracoes_padrao
            [break;]
    }

    witch (tipofruta) {
        case "Laranja":
            console.log("O quilo da laranja está R$0,59.<br>");
            break;
        case "Maçã":
            console.log("O quilo da maçã está R$0,32.<br>");
            break;
        case "Banana":
            console.log("O quilo da banana está R$0,48.<br>");
            break;
        case "Cereja":
            console.log("O quilo da cereja está R$3,00.<br>");
            break;
        case "Manga":
            console.log("O quilo da manga está R$0,56.<br>");
            break;
        case "Mamão":
            console.log("O quilo do mamão está R$2,23.<br>");
            break;
        default:
            console.log("Desculpe, não temos " + tipofruta + ".<br>");
    }
    
    console.log("Gostaria de mais alguma coisa?<br>");
*/