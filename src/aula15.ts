// Parâmetros rest
// Usado para receber um número variável de parâmetros
// Deve ser o último parâmetro
// Os parâmetros rest devem ser do mesmo tipo
function fsoma(...n:number[]){
    let s:number=0;
    // Percorrer o array n
    // Somar os elementos
    // // Retornar a soma

    // n.forEach((en)=>{
    //     s+=en;
    // });
    // return s;

    // Usando for...of
    // for...of percorre o array
    // for...of retorna o elemento
    // for...of é mais simples que forEach
    // for...of pode ser usado com qualquer tipo de array
    for(let en of n){
        s+=en;
    }
    return s;
}

console.log(fsoma(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20));