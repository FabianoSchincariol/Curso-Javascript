//Funções

/*
Funções são blocos de construção fundamentais em JavaScript. Uma função é 
um procedimento de JavaScript - um conjunto de instruções que executa uma 
tarefa ou calcula um valor. Para usar uma função, você deve defini-la em 
algum lugar no escopo do qual você quiser chamá-la.

    função sem parâmetro
    
    function mensagemHello(){
         console.log('Hello!');
    }

    chamando a função sem parâmetro
    mensgemHello();

    função com parâmetro

    function ,mensagem(msg) { 
        console.log(msg); 
    }

    chamando a função com parâmetro
    let m = "olá !!!!";
    mensagem(m);
    
*/

//Arrow Functions

/*
Uma expressão arrow function possui uma sintaxe mais curta quando comparada
a uma expressão de função (function expression) e não tem seu próprio this,
arguments, super ou new.target. Estas expressões de funções são melhor
aplicadas para funções que não sejam métodos, e elas não podem ser usadas 
como construtoras (constructors).

    let mesangemHello = () => {
        console.log("Hello");
    }

    let mensagem = (msg) => {
        console.log(msg);
    }

Arrow functions podem ter um corpo conciso ("concise body") ou 
o usual corpo em bloco ("block body").

    var func = x => x * x;                  
     sintaxe de concise body. O "return" é implícito

    var func = (x, y) => { return x + y; }; 
     Em um função com block body, é necessário um "return" explícito 

Com parâmetros pré definidos

    function multiply(a, b = 1) {
        return a * b;
    }

    multiply(5, 2); // 10
    multiply(5, 1); // 5 
    multiply(5);    // 5

    Não esquecendo do operador ternário que não deixa de ser uma função

    let x = 5;
    let y = 3;
    let verdadeiro = x > y ? true : false;
*/