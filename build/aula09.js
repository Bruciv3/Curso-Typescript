"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//definindo um enum
// um enum é um tipo especial que permite definir um conjunto de constantes nomeadas.
// Por padrão, os valores das constantes começam em 0 e incrementam em 1 para cada constante subsequente.
// Também é possível atribuir valores específicos às constantes do enum.
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
//usando enum
// mostrando o valor numérico
console.log(dias.domingo);
console.log(dias['domingo']);
console.log(dias[1]);
const d = new Date(); //objeto date
console.log(d); //data atual
console.log(d.getDate()); //mostra o dia do mês
// getDay() - retorna o dia da semana (0-6) onde 0 é domingo e 6 é sábado
// usando enum para mostrar o dia da semana por extenso
console.log(dias[d.getDay()]); //mostra o dia da semana por extenso
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#ff0000";
    cores["verde"] = "#00ff00";
    cores["azul"] = "#0000ff";
})(cores || (cores = {}));
console.log(cores.verde);
console.log(cores['vermelho']);
// exemplo de erro
// console.log(cores['#fff']); //
// enum sem valor inicial
// nesse caso o valor inicial é 0
// e os valores seguintes são incrementados em 1
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["USER"] = 0] = "USER";
    tipoUsuario[tipoUsuario["PERITO"] = 1] = "PERITO";
    tipoUsuario[tipoUsuario["ADMIN"] = 2] = "ADMIN";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.ADMIN);
// atribuindo valor do enum a uma variável
// o tipo da variável é o nome do enum
// nesse caso o tipo da variável é tipoUsuario
// o valor atribuído deve ser um dos valores do enum
// nesse caso o valor atribuído é 0 (tipoUsuario.USER)
// se tentar atribuir um valor que não está no enum, dará erro
const tp = tipoUsuario.USER; // tipoUsuario.USER
console.log(tp);
