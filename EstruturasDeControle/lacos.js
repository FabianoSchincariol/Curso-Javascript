//Laços for, while, do while, for in e for of

//for

/*
    Um laço for é repetido até que a condição especificada seja falsa. 
    O laço for no JavaScript é similar ao Java e C

    1. A expressão expressao Inicial é inicializada e, caso possível, é executada.
    Normalmente essa expressão inicializa um ou mais contadores, mas a sintaxe
    permite expressões de qualquer grau de complexidade. Podendo conter também 
    declaração de variáveis.

    2. A expressão condicao é avaliada. caso o resultado de condicao seja verdadeiro
    o laço é executado. Se o valor de condicao é falso, então o laço terminará. 
    Se a expressão condicao é omitida, a condicao é assumida como verdadeira.

    3. A instrução é executada. Para executar múltiplas declarações, use uma
    declaração em bloco ({ ... }) para agrupá-las.

    4. A atualização da expressão incremento, se houver, executa, e retorna o 
    controle para o passo 2.

    for ([expressaoInicial]; [condicao]; [incremento])
    {
        declaração
    }    
*/

//do while

/*
    A instrução do...while repetirá até que a condição especificada seja falsa.

    A instrução será executada uma vez antes da condição ser verificada. 
    Para executar multiplas instruções utilize uma declaração de bloco ({ ... })
    para agrupá-las. Caso a condicao seja verdadeira, então o laço será executado 
    novamente. Ao final de cada execução, a condicao é verificada. Quando a 
    condição contida no while for falsa a execução do laço é terminada e o 
    controle é passado para a instrução seguinte a do...while.

    do{
        declaracao
    }while (condicao);

    do {
            i += 1;
            console.log(i);
        } while (i < 5);
*/

//while

/*
        Uma declaração while executa suas instruções, desde que uma condição 
        especificada seja avaliada como verdadeira.

        Se a condição se tornar falsa,  a declaração dentro do laço para a 
        execução e o controle é passado para a instrução após o laço.

        O teste da condição ocorre antes que o laço seja executado. 
        Desta forma se a condição for verdadeira o laço executará e testará a 
        condição novamente. Se a condição for falsa o laço termina e passa 
        o controle para as instruções após o laço.

        while (condicao)
        {
            declaração
        }

        n = 0;
        x = 0;
        while (n < 3) {
            n++;
             x += n;
        }

        loop infinito
        while(true){
            declaração
        }
  
*/

//for in

/*
        A declaração for...in executa iterações a partir de uma variável 
        específica, percorrendo todas as propriedades de um objeto.
        Para cada propriedade distinta, o JavaScript executará uma iteração.

        for (variavel in objeto) 
        {
            declaracoes
        }

        function dump_props(obj, obj_name) {
            var result = "";
            for (var i in obj) {
            result += obj_name + "." + i + " = " + obj[i] + "<br>";
            }
            result += "<hr>";
            return result;
        }
*/

//for of

/*
        A declaração for...of cria uma laço com objetos interativos 
        ((incluindo, Array, Map, Set, assim por conseguinte ), executando
        uma iteração para o valor de cada propriedade distinta.

        for (variavel of objeto) {
            declaracoes
        }

        O exemplo a seguir mostra a diferença entre o for...of e o for...in. 
        Enquanto o for...in interage com o nome das propriedades, o for...of 
        interage com o valor das propriedades.

        let arr = [3, 5, 7];
        arr.foo = "hello";

        for (let i in arr) {
            console.log(i); // logs "0", "1", "2", "foo"
        }

        for (let i of arr) {
            console.log(i); // logs "3", "5", "7"
        }
*/