"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Aula 20 - Herança e Construtores
// Herança é um mecanismo que permite criar uma nova classe a partir de uma classe existente
// A nova classe herda os atributos e métodos da classe existente
// A nova classe pode adicionar novos atributos e métodos
// A nova classe pode modificar os atributos e métodos da classe existente
// Usar a palavra reservada extends
// Usar a palavra reservada super para chamar o construtor da classe base
class Conta {
    // protected permite que as classes filhas acessem os atributos
    // private não permite que as classes filhas acessem os atributos
    // public permite que qualquer código acesse os atributos
    numero;
    titular;
    // Método construtor
    // Executado automaticamente quando o objeto é criado
    // Usado para inicializar atributos ou executar código
    constructor(titular) {
        this.numero = this.gerarNumeroConta(); // this se refere ao atributo da classe
        this.titular = titular; // this se refere ao atributo da classe
    }
    // Método para gerar número da conta
    // Retorna um número aleatório entre 1 e 100000
    // Usar Math.random() e Math.floor()
    // Método privado, só pode ser chamado dentro da classe
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    // Método para mostrar informações da conta
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
        console.log('-------------------');
    }
}
// ContaPF herda de Conta
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular); // chama o construtor da classe base
        this.cpf = cpf;
        console.log(`Conta PF criada para ${titular} com CPF ${this.cpf} e número ${this.numero}`);
    }
}
// ContaPJ herda de Conta
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular); // chama o construtor da classe base
        this.cnpj = cnpj;
        console.log(`Conta PJ criada para ${titular} com CNPJ ${this.cnpj} e número ${this.numero}`);
    }
}
const conta1 = new ContaPF(43487019892, "Bruno Cintra");
const conta2 = new ContaPJ(301234567, "Empresa X");
console.log(conta1);
console.log(conta2);
conta1.info();
conta2.info();
