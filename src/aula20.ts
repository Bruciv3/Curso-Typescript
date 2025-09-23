
// Aula 20 - Herança e Construtores
// Herança é um mecanismo que permite criar uma nova classe a partir de uma classe existente
// A nova classe herda os atributos e métodos da classe existente
// A nova classe pode adicionar novos atributos e métodos
// A nova classe pode modificar os atributos e métodos da classe existente
// Usar a palavra reservada extends
// Usar a palavra reservada super para chamar o construtor da classe base
class Conta{
    public numero:number;
    public titular:string;

    // Método construtor
    // Executado automaticamente quando o objeto é criado
    // Usado para inicializar atributos ou executar código
    constructor(numero:number, titular:string){
        this.numero=numero; // this se refere ao atributo da classe
        this.titular=titular; // this se refere ao atributo da classe
    }

}

// ContaPF herda de Conta
class ContaPF extends Conta{

}
// ContaPJ herda de Conta
class ContaPJ extends Conta{

}


const conta1=new ContaPF(1,"Bruno Cintra");

const conta2=new ContaPJ(2,"Empresa X");

console.log(conta1.titular);
console.log(conta2.titular);