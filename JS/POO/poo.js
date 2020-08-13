//Programação Orientada a Objetos

/*
Em POO (Programação Orientada a Objetos), um objeto é uma instância de 
uma classe. Uma classe define as características do objeto. Em nossos 
algoritmos e estruturas de dados.

Classe
Define as características do objeto. Uma classe é uma definição modelo 
das propriedades e métodos de um objeto.

Objeto
Um exemplar de uma classe.

Atributo
Uma característica do objeto, como cor, modelo, fabricante se estivemos 
representando um veículo, por exemplo.

Método
Uma ação do objeto, como ligar, desligar, frear se estivemos representando 
um veículo, por exemplo. É uma subrotina ou função associada a uma classe.

Construtor
Um método chamado assim que um novo exemplar do objeto for criado. 
Ele geralmente tem o mesmo nome da classe que o contém.

Herança
Uma classe pode herdar características de outra classe.

Encapsulamento
Uma maneira de agrupar os dados e os métodos que usam os dados.

Abstração
A conjunção de herança complexa, métodos, propriedades de um objeto devem 
refletir adequadamente um modelo da realidade.

Polimorfismo
Diferentes classes podem definir o mesmo método ou propriedade.

    class Livro{

        construtor
        cosntructor(titulo, paginas, isbn){
            this.titulo = titulo;
            this.paginas = paginas;
            this.isbn = isbn;
        }

        imprimerIsbn() {
            console.log(this.isbn);
        }
    }


    criar um objetobook da classe livro
    let book = new Livro("O Titulo", 256, 125469875522);

    imprimir o número de páginas no console
    console.log(book.paginas);
*/

//Herança

/*

    Herança
    As classes JavaScript suportam o recurso herança, característica comum 
    na orientação a objetos onde uma classe pode herdar comportamentos e 
    características de outra classe.

    Super
    A palavra-chave super é usada para acessar o objeto pai de um objeto, 
    em outros casos, é usada para acessar a classe pai de uma classe.
    Quando usada no construtor de uma classe, a palavra-chave super deve 
    ser usada apenas uma vez, e precisa ser usada antes que a palavra-chave 
    this possa ser usada. Essa palavra-chave também pode ser usada para 
    chamar uma função ou objeto pai.

    class HerdarDeLivro extendes Livro{

        construtor
        constructor(titulo, paginas, isbn, tecnologia){
            super(titulo, paginas, isbn);
            this.tecnologia = tecnologia;
        }

        imprimeTecnologia(){
            console.log(this.tecnologia);
        }
    }

    cria um objeto hBook da classe herdarDeLivro
    let hLivro = new HerdarDeLivro("O titulo", 456, 4521225236, "Python");

    console.log(hlivro.titulo);
    console.log(hlivro.imprimeTecnologia());
*/

//Polimorfismo

/*
Polimorfismo significa "muitas formas", é o termo definido em linguagens 
orientadas a objeto, como por exemplo Java, C# e C++, que permite ao 
desenvolvedor usar o mesmo elemento de formas diferentes. Polimorfismo 
denota uma situação na qual um objeto pode se comportar de maneiras 
diferentes ao receber uma mensagem.

    class Menu {
	    public void paint();
    }

    class WinMenu extends Menu {
	    public void paint() {
		System.out.println("Eu sou um WinMenu");
	    }
    }   

    class LinuxMenu extends Menu {
	    public void paint() {
		System.out.println("Eu sou um LinuxMenu");
	    }
    }
*/

//Abstração

/*
A abstração de dados é o processo de ocultar certos detalhes e mostrar 
apenas informações essenciais ao usuário.
A abstração pode ser alcançada com classes abstratas ou interfaces 
(que você aprenderá mais sobre no próximo capítulo).

    abstract class Animal {
        public abstract void animalSom();
        public void dormir() {
        System.out.println("Zzz");
        }
    }

    class Porco extends Animal {
        public void animalSom() {            
            System.out.println("O som do porco é: wee wee");
        }
    }

    let porco = new Porco();
    let animal = new Animal();//dará um erro, não podemos acessar diretamente
    uma classe abstrata
*/

//Escapsulamento

/*
    Pesquisar na internet para ver várias definições e comenta-las
*/