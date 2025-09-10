"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class curso {
    canal;
    curso;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new curso("CFB Cursos", "Typescript");
console.log(c1.canal);
console.log(c1.curso);
