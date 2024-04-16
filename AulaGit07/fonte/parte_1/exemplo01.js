//exemplo de declaração de classe com atributos e declaração de um objeto

class Livro {
    constructor (pNome){
        this.Nome = pNome;
    }

    get Nome(){ return this.Nome;}
    set Nome(pNome) { this.nome = pNome;}
}

var obj_livro1 = new Livro("Use a cabeça Java");
console.log("Nome do Livro: " + obj_livro1.nome);