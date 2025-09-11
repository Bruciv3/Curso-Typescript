//tuplas
//tuplas são arrays com tamanho e tipos pré definidos
// Exemplo de tupla
// readonly - Somente Leitura
let coisas:readonly[string,number,boolean]=["Bruno",100,true];

// com readonly não é possível fazer alterações
// coisas.push(200);
// coisas[1]=200;

console.log(coisas);
console.log(coisas[2]);