//Tipos de Dados

//Dados Primitivos

/*

    Boolean -> true e false.

    null -> Uma palavra-chave que indica valor nulo. 
    Devido JavaScript ser case-sensitive, null não é o mesmo que Null, 
    NULL, ou ainda outra variação.

    undefined -> Uma propriedade superior cujo valor é indefinido.
    
    Number -> 42 ou 3.14159.
    Number inteiro ->
                0, 117 e -345 (decimal, base 10)
                015, 0001 e -077 (octal, base 8) 
                0x1123, 0x00111 e -0xF1A7 (hexadecimal, "hex" ou base 16)
                0b11, 0b0011 aend -0b11 (binário, base 2)
    Number flutuante ->
                3.1415926
                -.123456789
                -3.1E+12
                .1e-23
    

    String -> "Howdy"
    Uma string literal são zero ou mais caracteres dispostos em aspas 
    duplas (") ou aspas simples ('). Uma sequência de caracteres deve
    ser delimitada por aspas do mesmo tipo; ou seja,  as duas aspas 
    simples ou ambas aspas duplas.

        "foo"
        'bar'
        "1234"
        "um linha \n outra linha"
        "John's cat"

    Uso de caracteres especiais em string
    
    Além dos caracteres comuns, você também pode incluir caracteres especiais 
    em strings.

    "uma linha \n outra linha"

    Caracter	Descrição
        \0	    Byte nulo
        \b	    Backspace
        \f	    Alimentador de formulário
        \n  	Nova linha
        \r  	Retorno do carro
        \t	    Tabulação
        \v	    Tabulação vertical
        \'  	Apóstrofo ou aspas simples
        \"	    Aspas dupla
        \\	    Caractere de barra invertida
        \XXX	Caractere com a codificação Latin-1 especificada por três dígitos 
        octal XXX entre 0 e 377. Por exemplo, \251 é sequência octal para o símbolo
        de direitos autorais.

        \xXX	Caractere com a codificação Latin-1 especificada por dois dígitos
        hexadecimal XX entre 00 e FF. Por exemplo, \xA9 é a sequência hexadecimal
        para o símbolo de direitos autorais.

        \uXXXX	Caractere Unicode especificado por quatro dígitos hexadecimal
        XXXX. Por exemplo, \u00A9 é a sequência Unicode para o símbolo de 
        direitos autorais. Veja sequências de escape Unicode.

        var quote = "Ele lê \"The Cremation of Sam McGee\" de R.W. Service.";
        var home = "c:\\temp";
        var str = "esta string \
                   está quebrada \
                   em várias\
                   linhas."
        var poema = 
                    "Rosas são vermelhas\n\
                    Violetas são azuis,\n\
                    Esse seu sorriso\n\
                    é o que me seduz. (Lucas Pedrosa)"

    Symbol -> O tipo de dados "symbol" é qualificado como um primitivo, onde
    valores desse tipo podem ser usados para fazer propriedades de objetos
    anônimos. Ele pode ser usado como chave de uma propriedade de objeto quando
    este tem a intenção de ser privada, para uso interno da classe ou do tipo 
    do objeto em questão. Como exemplo, chaves do tipo symbol existem em vários 
    objetos internos do JavaScript. Da mesma forma, pode-se construir classes 
    que tenham membros privados usando essa técnica. O tipo de dados symbol
    é de propósito altamente especializado, o que o torna pouco versátil; uma 
    instância de Symbol pode ser atribuída à um L-value, e pode ter sua 
    identidade examinada, nada mais; nenhuma outra operação poderá ser aplicada,
    o que contrasta, por exemplo, com uma instância de Number para um inteiro 
    cujo valor é 42, que por sua vez tem diversas operações para comparar, 
    combinar com outros tipos de dados, etc.  
    
        Symbol("foo") !== Symbol("foo")
        const foo = Symbol()
        const bar = Symbol()
        typeof foo === "symbol"
        typeof bar === "symbol"
        let obj = {}
        obj[foo] = "foo"
        obj[bar] = "bar"
        JSON.stringify(obj) // {}
        Object.keys(obj) // []
        Object.getOwnPropertyNames(obj) // []
        Object.getOwnPropertySymbols(obj) // [ Symbol(), Symbol() ]

*/

//Dados Não Primitiviso

/*

    Objeto -> refere-se a uma estrutura de dados contendo dados e instruções
    para se trabalhar com estes dados. Objetos algumas vezes se referem 
    a coisas do mundo real, por exemplo um objeto de carro ou um mapa em 
    um jogo de corrida. JavaScript, Java, C++, Python, e Ruby são exemplos 
    de Linguagens orientadas à objeto (object-oriented programming).
    
    Array -> Um array literal é uma lista de zero ou mais expressões, 
    onde cada uma delas representam um elemento do array, inseridas 
    entre colchetes ([]). Quando você cria um array usando um array 
    literal, ele é inicializado  com os valores especificados como
    seus elementos, e seu comprimento é definido com o  número de elementos 
    especificados.
    
*/