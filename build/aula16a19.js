"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Aula 16 - Classes
// Classes são modelos para criar objetos
// Classes podem conter atributos e métodos
// Atributos são variáveis que pertencem à classe
// Métodos são funções que pertencem à classe
// Classes são definidas com a palavra reservada class
class Computador {
    nome; // padrão é public
    id; // só pode ser acessado dentro da classe
    ram; // só pode ser acessado dentro da classe
    cpu;
    ligado; // só pode ser acessado dentro da classe e classes derivadas
    // Método construtor
    // Executado automaticamente quando o objeto é criado
    // Usado para inicializar atributos ou executar código
    constructor(nome, ram, cpu) {
        // Inicializar atributo nome
        // Usar this para acessar atributos e métodos da classe
        // Mesmo sendo o mesmo nome, o atributo é diferente do parâmetro
        this.id = 0;
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram} GB`);
        console.log(`CPU: ${this.cpu} núcleos`);
        console.log(`Ligado: ${this.ligado ? 'Sim' : 'Não'}`);
        console.log('-------------------');
    }
    // Ligar método
    ligar() {
        this.ligado = true;
    }
    // Desligar método
    desligar() {
        this.ligado = false;
    }
    upRam(qtde) {
        if (qtde > 0 && qtde <= 128) {
            this.ram = qtde;
        }
        else {
            console.log(`Quantidade ${qtde} de RAM para o computador ${this.nome} inválida `);
        }
    }
}
// Criar objetos
// instanciar objetos
// Usar a classe como um tipo
// Usar a palavra reservada new
const c1 = new Computador("CPU 1", 64, 8);
const c2 = new Computador("CPU 2", 32, 4);
const c3 = new Computador("CPU 3", 16, 2);
// Ligar e desligar computadores
c1.ligar();
c2.ligar();
c3.desligar();
c3.upRam(16); // válido
c2.upRam(-128); // inválido
// Erro: ligado é privado
// c2.ligado=false;
// Chamar método info
c1.info();
c2.info();
c3.info();
// Acessar atributos
// Usar o operador ponto
// Acessar atributos e modificar valores
// // Acessar atributos e ler valores
// c1.nome="CPU 1";
// c2.nome="CPU 2";
// c3.nome="CPU 3"; 
// Mostrar valores
// // Usar console.log
// console.log(c1.nome);
// console.log(c2.nome);
// console.log(c3.nome);
