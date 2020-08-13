//Getters e Setters

/*
Um getter é um método que obtém o valor de uma propriedade específica. 
Um setter é um método que define o valor de uma propriedade específica.
Você pode definir getters e setters em qualquer objeto de núcleo 
pré-definido ou objeto definido pelo usuário que suporta a adição 
de novas propriedades. A sintaxe para definir getters e setters 
usa a sintaxe literal do objeto.

    classe Pessoa{

        constructor(nome){
            this.nome = nome;
        }

        getter
        get nome(){
            return this.nome;
        
        setter
        set nome(valor){
            this._nome = valor;
        }        
    }

    let pessoa = new Pessoa("Juliano");
    console.log(pessoa.nome);//getter
    mudar de nome
    pessoa.nome = "Fábio";//setter
    console.log(pessoa.nome);//getter
*/