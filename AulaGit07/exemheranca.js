class Conta{
    constructor(){
        this.Saldo = 0;
    }

    get Saldo(){return this.Saldo;}
    set Saldo(pSaldo){this.saldo = pSaldo;}

    imprimir(){
        return "Saldo: " . this.saldo;
    }
}

class Corrent extends Conta{
    constructor(pLimite){
        super();
        this.limite = pLimite;
    }

    get Limite(){return this.Limite;}
    set Limite(pLimite){this.limite = pLimite;}
}

var obj_conta = new Conta(1000);
obj_conta.saldo = 700;
console.log(obj_conta.imprimir());

var obj_cc = new Conta(1000);
obj_cc.saldo = 500;
console.log(obj_cc);