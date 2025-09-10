"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nvalor;
let svalor;
let uvalor;
uvalor = 10;
nvalor = 10;
// svalor=nvalor;
svalor = nvalor.toString(); // toString() converte number em string
nvalor = Number.parseInt(svalor); // Number.parseInt() converte a string em number
console.log(typeof (svalor)); // typeof mostra o tipo da variavel
console.log(svalor); // mostra o valor da variavel
nvalor = svalor;
nvalor = uvalor;
nvalor += 10; // o + soma o valor
svalor = uvalor;
svalor += 10; // o + concatena a string, ou seja, junta os valores
console.log(typeof (uvalor));
console.log(uvalor);
console.log(typeof (nvalor));
console.log(nvalor);
console.log(typeof (svalor));
console.log(svalor);
