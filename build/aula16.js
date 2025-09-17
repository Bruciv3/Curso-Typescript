"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Aula 16 - Classes
// Classes são modelos para criar objetos
// Classes podem conter atributos e métodos
// Atributos são variáveis que pertencem à classe
// Métodos são funções que pertencem à classe
// Classes são definidas com a palavra reservada class
class Computador {
    nome = "Computador 1";
    ram = 0;
    cpu = 0;
    ligado = false;
}
// Criar objetos
// Usar a classe como um tipo
// Usar a palavra reservada new
const c1 = new Computador();
const c2 = new Computador();
const c3 = new Computador();
// Acessar atributos
// Usar o operador ponto
// Acessar atributos e modificar valores
// Acessar atributos e ler valores
c1.nome = "CPU 1";
c2.nome = "CPU 2";
c3.nome = "CPU 3";
// Mostrar valores
// Usar console.log
console.log(c1.nome);
console.log(c2.nome);
console.log(c3.nome);
