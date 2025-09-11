// Objetos em TypeScript
// Um objeto é uma coleção de propriedades, onde cada propriedade é definida por um par chave-valor.
// A chave é uma string (ou símbolo) que identifica a propriedade, e o valor pode ser de qualquer tipo de dado, incluindo outros objetos ou funções.
// Objetos são usados para representar entidades do mundo real, como pessoas, carros, produtos, etc., e para organizar dados relacionados de forma estruturada.

// Definição de um objeto em TypeScript
// Sintaxe básica
// let nomeDoObjeto: { chave1: tipo1, chave2: tipo2, ... } = { chave1: valor1, chave2: valor2, ... };
let dados={
    nome:"Bruno",
    idade:30,
    status:"Ativo",
    cumprimento:()=>{console.log("Olá Mundo!")},
    info:(a:string)=>{console.log(a)}
}

dados.nome="Jessica"; //Alterando o valor da chave nome

// Acessando valores do objeto
console.log(dados);
console.log(dados.nome);
console.log(typeof(dados)); //

// Chamando métodos do objeto
dados.cumprimento(); //function
dados.info(dados.nome); //function