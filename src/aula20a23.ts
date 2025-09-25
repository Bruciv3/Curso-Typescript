
// Aula 20 - Herança e Construtores
// Herança é um mecanismo que permite criar uma nova classe a partir de uma classe existente
// A nova classe herda os atributos e métodos da classe existente
// A nova classe pode adicionar novos atributos e métodos
// A nova classe pode modificar os atributos e métodos da classe existente
// Usar a palavra reservada extends
// Usar a palavra reservada super para chamar o construtor da classe base
class Conta{
    // protected permite que as classes filhas acessem os atributos
    // private não permite que as classes filhas acessem os atributos
    // public permite que qualquer código acesse os atributos
    protected numero:number;
    protected titular:string;
    private saldoconta:number

    // Método construtor
    // Executado automaticamente quando o objeto é criado
    // Usado para inicializar atributos ou executar código
    constructor(titular:string){
        this.numero=this.gerarNumeroConta(); // this se refere ao atributo da classe
        this.titular=titular; // this se refere ao atributo da classe
        this.saldoconta=0; // saldo inicial 0
    }
    // Método para gerar número da conta
    // Retorna um número aleatório entre 1 e 100000
    // Usar Math.random() e Math.floor()
    // Método privado, só pode ser chamado dentro da classe
    
    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1;
    }

    // Método para mostrar informações da conta
    protected info(){
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
    public saldo():number{
        return this.saldoconta;
    }
    protected deposito(valor:number){
        this.saldoconta+=valor;
    }
    protected saque(valor:number){
        if(valor>this.saldoconta){
            console.log('Saldo insuficiente');
        }
        else{
            this.saldoconta-=valor;
        }
    }
}

// ContaPF herda de Conta
class ContaPF extends Conta{
    cpf:number;
    constructor(cpf:number,titular:string){
        super(titular); // chama o construtor da classe base
        this.cpf=cpf;
        console.log(`Conta PF criada para ${titular} com CPF ${this.cpf} e número ${this.numero}`);
    }
    info(){
        console.log('Tipo: Pessoa Física');
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log('-------------------');
    }
    public deposito(valor:number){
        if(valor>1000){
            console.log('Depósito máximo para Conta PF é 1000');
            return;
        }
        else
            super.deposito(valor);
    }
    public saque(valor:number){
        if(valor>500){
            console.log('Saque máximo para Conta PF é 500');
            return;
        }
        else
            super.saque(valor);
    }
}
// ContaPJ herda de Conta
class ContaPJ extends Conta{
    cnpj:number;
    constructor(cnpj:number, titular:string){
        super(titular); // chama o construtor da classe base
        this.cnpj=cnpj;
        console.log(`Conta PJ criada para ${titular} com CNPJ ${this.cnpj} e número ${this.numero}`);
    }
    info(){
        console.log('Tipo: Pessoa Jurídica');
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log('-------------------');
    }
    public deposito(valor:number){
        if(valor>10000){
            console.log('Depósito máximo para Conta PJ é 10000');
            return;
        }
        else
            super.deposito(valor);
    }
    public saque(valor:number){
        if(valor>5000){
            console.log('Saque máximo para Conta PJ é 5000');
            return;
        }
        else
            super.saque(valor);
    }
}


const conta1=new ContaPF(43487019892,"Bruno Cintra");
const conta2=new ContaPJ(301234567,"Empresa X");

// console.log(conta1);
// console.log(conta2);

conta1.saque(200);
conta1.saque(600);

conta1.deposito(500);
conta1.deposito(5000);

conta1.saque(200);


conta2.saque(2000);
conta2.saque(6000);

conta2.deposito(5000);
conta2.deposito(50000);

conta2.saque(2000);

console.log(`O saldo da conta 1 é: ${conta1.saldo()}`); // console.log(conta1.saldo());
console.log(`O saldo da conta 2 é: ${conta2.saldo()}`); // console.log(conta2.saldo());

// conta1.info();
// conta2.info();