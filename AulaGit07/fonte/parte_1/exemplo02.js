//inserindo mais um atributo na classe Livro e aumentando a concatenação

class Livro {
    constructor (pNome, pPreco){
        this.Nome = pNome;
        this.Preco = pPreco;
    }

    get Nome(){ return this.Nome;}
    set Nome(pNome) { this.nome = pNome;}

    get Preco(){ return this.Preco;}
    set Preco(pPreco) { this.preco = pPreco;}
}

var obj_livro1 = new Livro("Use a cabeça Java", 200);
console.log("O livro " + obj_livro1.nome + " custa " + obj_livro1.preco + " reais");