//Array

/*
Antes de começar devemos saber que um array é um object(objeto) em Javascript

Arrays são objetos semelhantes a listas que vêm com uma série de  métodos
embutidos para realizar operações de travessia e mutação. Nem o tamanho de 
um array JavaScript nem os tipos de elementos são fixos. Já que  o tamanho 
de um array pode ser alterado a qualquer momento e os dados podem ser 
armazenados em posições não contíguas, arrays JavaScript não tem a garantia 
de serem densos; isso depende de como o programador escolhe usá-los. 
De uma maneira geral, essas são características convenientes, mas, se esses 
recursos não são desejáveis para o seu caso em particular, você pode 
considerar usar arrays tipados.

    var carro1 = "Audi";
    var carro2 = "Volvo";
    var carro3 = "BMW";

No entanto, e se você quiser dar uma volta pelos carros e encontrar um 
específico?
E se você não tivesse 3 carros, mas 300?

A solução é uma matriz!

Uma matriz pode conter muitos valores sob um único nome, e você pode acessar
os valores referindo-se a um número de índice.

    let arrayVeiculos = ["Audi", "Volvo", "BMW"];

    ou 

    let carros = new Array("Audi", "Volvo", "BMW");

Acessando os elementos da arrya
    console.log(arrayVeiculos[0]);// exibe 'este é o primeiro elemento'
    console.log(arrayVeiculos[1]);// exibe 'este é o segundo elemento'
    console.log(arrayVeiculos[aarrayVeiculosrr.length - 1]);//ultimo elemento 
    
Adicionando elementos depois de criado o array

    var frutas = [];
    frutas.push('banana', 'maça', 'pêssego');

    console.log(frutas.length); // 3 elementos criados

    Propriedades

    Array.length
    Propriedade comprimento do construtor Array, cujo valor é 1.

    get Array[@@species]
    A função de construtor que é utilizada para criar objetos derivados.

    Array.prototype
    Permite a adição de propriedades para todos os objetos array.

    Métodos

    Array.from()
    Cria uma nova instância de Array a partir de um objeto semelhante 
    ou iterável.

    Array.isArray()
    Retorna true se a variável é um array e false caso contrário.

    Array.of()
    Cria uma nova instância de Array com um número variável de argumentos, 
    independentemente do número ou tipo dos argumentos.

    Documentação completa

    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

*/