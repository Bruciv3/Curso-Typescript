
// Parâmetros padrão
// Se não passar o parâmetro, ele assume o valor padrão
// Pode ser usado em qualquer posição
// Pode ser usado com qualquer tipo
// Pode ser usado com mais de um parâmetro
// Pode ser usado com funções anônimas e arrow functions
const teste=(txt:string="..."):void=>{
    console.log(txt);
}

teste("Olá Mundo");
teste();

// Outra forma de fazer
// Usando o operador ?
// Se não passar o parâmetro, ele assume undefined
// Só pode ser usado em parâmetros opcionais
// Parâmetros opcionais sempre devem ser os últimos
const teste2=(txt?:string):void=>{
    console.log(txt);
}

teste2("Olá Mundo");
teste2();


const soma=(n1:number,n2:number):number=>{
    return n1+n2;
}

console.log(soma(90,10));

// Usando array como parâmetro
// Somar todos os elementos do array
// Retornar a soma
const somaArray=(n:number[]):number=>{
    let s:number=0 ;
    // Percorrer o array
    // Somar os elementos
    // Retornar a soma
    // Usando forEach
    // forEach não retorna nada
    // forEach recebe uma função como parâmetro
    // A função recebe o elemento como parâmetro
    // A função pode ser anônima ou arrow function
    n.forEach((e)=>{ // e é o elemento do array
        s+=e; // s=s+e
    });
    return s;
}

console.log(soma(90,10));

let numeros:number[]=[1,2,3,4,5,6,7,8,9,10];
console.log(somaArray(numeros));