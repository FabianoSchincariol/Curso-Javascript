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

Tipos de Dados

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