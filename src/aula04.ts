type Nivel = "INICIANTE" | "INTERMEDIARIO" | "AVANCADO";

interface Curso {
    nome: string;
    duracao: number;
    nivel: Nivel;
}


// Array de objetos do tipo Curso
const cursos: Curso[] = [
    { nome: "JAVA",        duracao: 40, nivel: "INICIANTE" }, // Array de objetos do tipo Curso
    { nome: "TYPESCRIPT",  duracao: 80, nivel: "INTERMEDIARIO" }, // Array de objetos do tipo Curso
    { nome: "PYTHON",      duracao: 60, nivel: "AVANCADO" },
    { nome: "CSHARP",      duracao: 50, nivel: "INICIANTE" }
];

cursos.push({ nome: "C++", duracao: 70, nivel: "AVANCADO" });

let curso: Curso = { nome: "C", duracao: 30, nivel: "INICIANTE" };

if (cursos[0]) {
    cursos[0].nome = "Java SE";
}

console.log(cursos);
console.log(curso);