let numeros:number[]=[100,200,300];
//let numeros:Array<number|string>=[100,200,300];
//let numeros:(number|string)[]=[100,200,300,"Bruno"];

//Push Insere no final da array
numeros.push(400);
//Unshift Insere no começo da array
numeros.unshift(50);
//Pop Remove o último elemento da array
numeros.pop();
//Shift Remove o primeiro elemento da array
numeros.shift();


console.log(numeros);

//ReadonlyArray - Somente Leitura
let numeros_ro:ReadonlyArray<number>=[100,200,300];
console.log(numeros_ro);