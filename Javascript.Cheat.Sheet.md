# JAVASCRIPT CHEAT SHEET

## Fabiano T. Schincairol
## Agosto/2020

### Incluindo Javascript dentro do HTML

```html

    <script type="text/javascript">

        //bloco de código Javascript

    </script>

```

### Incluindo arquivos externos Javascript 

```html

    //geralmente chamado no final da tag <body>
    <script src="arquivoJavascript.js"></script>
  
```

### Comentários em Javascript

Comentário de uma única linha com duas barras ->   //

Comentários de multiplas linhas com barra asteristico e asteristico barra ->  /**/

```Javascript

// cometário de única linha

/*
    Comentário de multiplas linhas
*/

```

### Variáveis

```Javascript
var primeiraVariavel = 0;
/*
var — A variável mais comum. Pode ser reatribuído, mas acessado apenas dentro de uma função. Variáveis definidas com var movem-se para o topo quando o código é executado.
*/
const primeiraConstante = 3.14;
/*
const — Não pode ser reatribuído e não acessível antes que eles apareçam dentro do código.
*/
let segundaVariavel = 0;
/*
let — Semelhante ao const, no entanto, permite que a variável possa ser retribuída, mas não redeclarada.
*/
```

### Tipos de Dados

```Javascript

//Primitivos
//Número
var tipoDeDadosNumero = 0;
//Caracteres
var tipoDeDadosCaractere = 'X';
//String
var tipoDeDadosString = "string";
//Operações
var tipoDeDadosOperacoes = 1 + 2 + 15;
//Booleanos -> verdadeiro e falso
var tipoDeDadosBooleanos = true;
//Nulo
var tipoDeDadosNulo = null;
//Indefinido
var tipoDeDadosIndefinido = undefined;
//Not a Number NaN
var tipoDeDadosNaN = NaN;

//Naõ primitivos
//Objetos
var tipoDeDadosObjeto = {
    primeiroNome: "Carlos",
    segundoNome: "Silva",
    idade: 25,
    cadastroAtivo:  true
}

```

### Objetos

```Javascript

let objetoVeiculo = {
    tipoVeiculo = "carro",
    marcaVeiculo = "vw",
    modeloVeiculo = "fusca",
    corVeiculo = "branco",
    motorVeiculos = 1.3,
    combustivelVeiculo = "gasolina",
    numeroPassageirosVeiculo = 5
}

```

### Array

```Javascript

let diasSemana = [
    "segunda-feira", 
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
    "domingo"
     ];
```

##### Métodos para manipulação de arrays

```Javascript
concat() // Junte-se a várias matrizes em uma

indexOf() // Retorna o valor primitivo do objeto especificado

join() // Combine elementos de uma matriz em uma única sequência e retorne a sequência

lastIndexOf() // Dá a última posição em que um determinado elemento aparece em uma matriz

pop() // Remove o último elemento de uma matriz

push() // Adicione um novo elemento no final

reverse() // Classificar elementos em ordem descendente

shift() // Remova o primeiro elemento de uma matriz

slice() // Puxa uma cópia de uma parte de uma matriz em uma nova matriz

sort() // Classifica elementos alfabeticamente

splice() // Adiciona elementos de forma e posição especificadas

toString() // Converte elementos em strings

unshift() // Adiciona um novo elemento ao início

valueOf() // Retorna a primeira posição em que um determinado elemento aparece em uma matriz
``` 

#### Operadores

```Javascript
//adição
+ 
//subtração
-
//multiplicação
*
//divisão
/ 
//operador de agrupamento, as operações dentro de suportes são executadas mais cedo do que as externas
(...)
//resto de divisão
%
//incremento
++
//decremento
--
```

#### Operadores de compração

```Javascript
//igual a
==
//igual valor e tipo igual
===
//diferente
!=
//diferente valor e diferente tipo
!==
//maior que
>
//menor que
<
//maior e igual que
>=
//menor e igual que
<=
//Ternário
?
```

#### Operadores lógicos

```Javascript
//AND-> e 
&&
//OR-> ou
||
//NOT-> não
!
```

#### Operadores bitwisw

```Javascript
//AND-> e 
&
//OR-> ou
|
//NOT-> não
~
//XOR
^
//Para esqeurda
<<
//Para a direira
>>
//Prrencher com 0
>>> 
```

#### Funções / Métodos

```Javascript
//declaração normal de uma função
funciton nomeFuncao(paramentro1, paramentro2, paramentron)
{
    //bloco de código
}

//declaração de arrow function com parâmentros
let funcaoArrowComParametro = (paramentro1, paramenton) => 
{
    //bloco de código
}

//declaração de arrow function sem parâmentros
let funcaoArrowSemParamentro = () => 
{
    //bloco de código
}

```

#### Saída de Dados

```Javascript

//Dados de saída em uma caixa de alerta na janela do browser
alert("mensagem")
//Abre uma caixa de diálogo sim/não e retorna true ou false dependendo do clique do usuário
confirm()
//Grava informações para o console no navegador, e é ótimo para propositos de depuração e testes de código, evitando o uso na produção final
console.log()
//saída em forma de tabela no console do navegador
console.table()
//Escreve diretamente no documento HTML
document.write()
//Cria uma caixa de diálogo para a entrada do usuário
prompt()

```
