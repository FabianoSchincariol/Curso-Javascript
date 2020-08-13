//Operadores 

/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

O JavaScript possui os tipos de operadores a seguir. 
Esta seção descreve os operadores e contém informações 
sobre precedência de operadores.

Operadores de atribuição

Um operador de atribuição atribui um valor ao operando à sua esquerda baseado
no valor do operando à direita. O operador de atribuição básico é o 
igual (=), que atribui o valor do operando à direita ao operando à esquerda. 
Isto é, x = y atribui o valor de y a x.

Atribuição
	x = y	x = y
Atribuição de adição
	x += y	x = x + y
Atribuição de subtração	
    x -= y	x = x - y
Atribuição de multiplicação
	x *= y	x = x * y
Atribuição de divisão
	x /= y	x = x / y
Atribuição de resto	
    x %= y	x = x % y
Atribuição exponencial
	x **= y	x = x ** y
Atribuição bit-a-bit por deslocamento á esquerda
	x <<= y	x = x << y
Atribuição bit-a-bit por deslocamento á direita
	x >>= y	x = x >> y
Atribuiçãode bit-a-bit deslocamento á direita não assinado
	x >>>= y	x = x >>> y
Atribuição AND bit-a-bit
	x &= y	x = x & y
Atribuição XOR bit-a-bit
	x ^= y	x = x ^ y
Atribuição OR bit-a-bit
    x |= y	x = x | y
    
Operadores de comparação

Um operador de comparação compara seus operandos e retorna um valor lógico
baseado em se a comparação é verdadeira. Os operandos podem ser numéricos,
strings, lógicos ou objetos. Strings são comparadas com base em ordenação 
lexográfica utilizando valores Unicode. Na maioria dos casos, se dois 
operandos não são do mesmo tipo, o JavaScript tenta convertê-los para um 
tipo apropriado. Isto geralmente resulta na realização de uma comparação 
numérica. As únicas exceções a esta regra são os operadores === e o !==,
que realizam comparações de igualdade e desigualdade "estritas". Estes
operadores não tentam converter os operandos em tipos compatíveis antes 
de verificar a igualdade. A tabela a seguir descreve os operadores de 
comparação levando em conta o seguinte código:

Igual (==)	Retorna verdadeiro caso os operandos sejam iguais.
	3 == var1
    "3" == var1
    3 == '3'
Não igual (!=)	Retorna verdadeiro caso os operandos não sejam iguais.
	var1 != 4
    var2 != "3"
Estritamente igual (===) Retorna verdadeiro caso os operandos sejam iguais 
e do mesmo tipo. Veja também Object.is e igualdade em JS.	
    3 === var1
Estritamente não igual (!==) Retorna verdadeiro caso os operandos não sejam 
iguais e/ou não sejam do mesmo tipo.	
    var1 !== "3"
    3 !== '3'
Maior que (>) Retorna verdadeiro caso o operando da esquerda seja maior que 
o da direita.	
    var2 > var1
    "12" > 2
Maior que ou igual (>=)	Retorna verdadeiro caso o operando da esquerda 
seja maior ou igual ao da direita.	
    var2 >= var1
    var1 >= 3
Menor que (<)   Retorna verdadeiro caso o operando da esquerda seja menor 
que o da direita.	
    var1 < var2
    "12" < "2"
Menor que ou igual (<=)	Retorna verdadeiro caso o operando da esquerda 
seja menor ou igual ao da direita.	    
    var1 <= var2
    var2 <= 5

Operadores lógicos

Operadores lógicos são utilizados tipicamente com valores booleanos (lógicos);
neste caso, retornam um valor booleano. Entretanto, os operadores && e || 
na verdade retornam o valor de um dos operandos especificados, de forma que 
se esses operadores forem utilizados com valores não-booleanos, eles possam 
retornar um valor não-booleano.

     && -> E 
     || -> Ou 
     ! -> Negação

    var a1 =  true && true;     // t && t retorna true
    var a2 =  true && false;    // t && f retorna false
    var a3 = false && true;     // f && t retorna false
    var a4 = false && (3 == 4); // f && f retorna false
    var a5 = "Gato" && "Cão";   // t && t retorna Cão
    var a6 = false && "Gato";   // f && t retorna false
    var a7 = "Gato" && false;   // t && f retorna false


Operadores Bit a Bit -> Bitwise

Operadores de deslocamento bit a bit
Os operadores de deslocamento bit a bit possui dois operandos: o primeiro 
é uma quantidade a ser deslocada e o segundo especifica o número de posições
binárias as quais o primeiro operando deverá ser deslocado. A direção da 
operação de deslocamento é contralada pelo operador utilizado.

Operadores de deslocamento convertem seus operandos em inteiros de 32 bits
e retornam um resultado do tipo do operando à esquerda.

    & -> E 
    | -> Ou 
    ~ -> Negação 
    ^ Ou exclusivo (Xor)

    15 & 9	9	1111 & 1001 = 1001
    15 | 9	15	1111 | 1001 = 1111
    15 ^ 9	6	1111 ^ 1001 = 0110
    ~15	-16	~00000000...00001111 = 11111111...11110000
    ~9	-10	~00000000...00001001 = 11111111...11110110

Operador typeof

O operador typeof retorna uma string indicando o tipo do operando sem avaliação.
operando é uma string, variável, palavra-chave ou objeto cujo tipo deve ser 
retornado. Os parênteses são opcionais.

    typeof document.lastModified; // retorna "string"
    typeof window.length;         // retorna "number"
    typeof Math.LN2;              // retorna "number"
    typeof blur;        // retorna "function"
    typeof eval;        // retorna "function"
    typeof parseInt;    // retorna "function"
    typeof forma.split; // retorna "function"

Operador Ternário

O operador condicional é o único operador JavaScript que utiliza três operandos. 
O operador pode ter um de dois valores baseados em uma condição

condicao ? valor1 : valor2

var status = (idade >= 18) ? "adulto" : "menor de idade";


*/
