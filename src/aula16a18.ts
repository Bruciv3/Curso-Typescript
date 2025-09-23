// Aula 16 - Classes
// Classes são modelos para criar objetos
// Classes podem conter atributos e métodos
// Atributos são variáveis que pertencem à classe
// Métodos são funções que pertencem à classe
// Classes são definidas com a palavra reservada class
class Computador {
    nome : string;
    ram : number;
    cpu : number;
    ligado : boolean;

    // Método construtor
    // Executado automaticamente quando o objeto é criado
    // Usado para inicializar atributos ou executar código
    constructor(nome:string, ram:number, cpu:number){
        // Inicializar atributo nome
        // Usar this para acessar atributos e métodos da classe
        // Mesmo sendo o mesmo nome, o atributo é diferente do parâmetro
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ligado=false;
    }

    info():void{
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram} GB`);
        console.log(`CPU: ${this.cpu} núcleos`);
        console.log(`Ligado: ${this.ligado?'Sim':'Não'}`);
        console.log('-------------------');

    }
}

// Criar objetos
// instanciar objetos
// Usar a classe como um tipo
// Usar a palavra reservada new
const c1=new Computador("CPU 1",64,8);
const c2=new Computador("CPU 2",32,4);
const c3=new Computador("CPU 3",16,2);

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