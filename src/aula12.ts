// Exemplo de função sem retorno (void)
function teste(): void { // Função sem retorno
    console.log("Função teste executada.");
}

function logar(user:string,password:string): void {

    console.log(`User:.. ${user}`);
    console.log(`Password:.. ${password}`);
}

logar('Bruno','123');
logar('teste','12341223');

// Exemplo de função com retorno
function soma2(n1:number,n2:number):number {
    let r=n1+n2; // Soma os dois números e armazena o resultado em 'r'
    return r; // Retorna a soma dos dois números
}

let n_res:number=soma2(20,20); // Chama a função e armazena o valor retornado na variável 'n_res'
console.log(n_res); // Exibe o valor armazenado em 'n_res'
let s_res:string=String(soma2(20,20)); // Chama a função, converte o valor retornado para string e armazena em 's_res'
console.log(s_res); // Exibe o valor armazenado em 's_res'
soma2(10,20); // Chama a função, mas não faz nada com o valor retornado



let total:number=soma2(10,35); // Chama a função e armazena o valor retornado na variável 'total'
console.log(total); // Exibe o valor armazenado em 'total'

const resultado = soma2(10,230); // Chama a função e armazena o valor retornado na constante 'resultado'
console.log(resultado); // Exibe o valor armazenado em 'resultado'

console.log(soma2(10,230)); // Chama a função diretamente dentro do console.log para exibir o valor retornado