//Existem dois lugares onde declaramos as variáveis

//Global
var minhaVariavelGlobal = "minha variável global";

//Local
function declarandoVariavelLocal(){
    var minhaVariavelLocal = "minha variável local";
    console.log(minhaVariavelLocal);
}

function declaracaoVariavelGlobal(){
    minhaVariavelGlobal = "Também funciona dentro da função por ser global";
    console.log(minhaVariavelGlobal);
}


//Teste para ver a visivbilidade das variáveis
console.log(minhaVariavelGlobal);
console.log(minhaVariavelLocal);

//somente chamando a função que será possível acessar a minhaVariavelLoval
declarandoVariavelLocal();

//chamando minhaVariavelGlobal dentro da função
declaracaoVariavelGlobal();