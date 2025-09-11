"use strict";
// Aula 13 - Funções em TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
// Função com parâmetros tipados e valor padrão
// Se nenhum valor for passado para n1 ou n2, eles assumem o valor padrão de 0
// O valor padrão deve ser atribuído apenas a parâmetros opcionais
// Parâmetros obrigatórios não podem ter valor padrão
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(5, 5));
// Função com parâmetro opcional
// O parâmetro opcional deve ser o último na lista de parâmetros
// Para indicar que um parâmetro é opcional, usamos o símbolo "?" após o nome do parâmetro
function novoUser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados); // Objeto com propriedades abreviadas
    // Mesma coisa que:
    // let dados={user:user,pass:pass,nome:nome};
    // console.log(`User:${user}`); // Template String
    // console.log(`Pass:${pass}`); // Template String
    // console.log(`Nome:${nome}`); // Template String
}
novoUser("Brucive", "12345");
