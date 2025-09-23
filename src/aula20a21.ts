
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
    constructor(titular:string){
        this.numero=this.gerarNumeroConta(); // this se refere ao atributo da classe
        this.titular=titular; // this se refere ao atributo da classe
    }
    // Método para gerar número da conta
    // Retorna um número aleatório entre 1 e 100000
    // Usar Math.random() e Math.floor()
    // Método privado, só pode ser chamado dentro da classe
    
    gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1;
    }

}

// ContaPF herda de Conta
class ContaPF extends Conta{
    cpf:number;
    constructor(cpf:number,titular:string){
        super(titular); // chama o construtor da classe base
        this.cpf=cpf;
    }
}
// ContaPJ herda de Conta
class ContaPJ extends Conta{
    cnpj:number;
    constructor(cnpj:number, titular:string){
        super(titular); // chama o construtor da classe base
        this.cnpj=cnpj;
    }

}


const conta1=new ContaPF(43487019892,"Bruno Cintra");

const conta2=new ContaPJ(301234567,"Empresa X");

console.log(conta1);
console.log(conta2);