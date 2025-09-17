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

}

// Criar objetos
// instanciar objetos
// Usar a classe como um tipo
// Usar a palavra reservada new
const c1=new Computador("CPU 1",64,8);
const c2=new Computador("CPU 2",32,4);
const c3=new Computador("CPU 3",16,2);

// Acessar atributos
// Usar o operador ponto
// Acessar atributos e modificar valores
// // Acessar atributos e ler valores
// c1.nome="CPU 1";
// c2.nome="CPU 2";
// c3.nome="CPU 3"; 
 
// Mostrar valores
// Usar console.log
console.log(c1);
console.log(c2);
console.log(c3);