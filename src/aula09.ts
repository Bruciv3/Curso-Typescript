
//definindo um enum
// um enum é um tipo especial que permite definir um conjunto de constantes nomeadas.
// Por padrão, os valores das constantes começam em 0 e incrementam em 1 para cada constante subsequente.
// Também é possível atribuir valores específicos às constantes do enum.
enum dias{
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
}

//usando enum
// mostrando o valor numérico
console.log(dias.domingo);
console.log(dias['domingo']);
console.log(dias[1]); 

const d=new Date(); //objeto date
console.log(d); //data atual
console.log(d.getDate()); //mostra o dia do mês
// getDay() - retorna o dia da semana (0-6) onde 0 é domingo e 6 é sábado
// usando enum para mostrar o dia da semana por extenso
console.log(dias[d.getDay()]); //mostra o dia da semana por extenso

enum cores{
    branco = "#fff",
    preto = "#000",
    vermelho = "#ff0000",
    verde = "#00ff00",
    azul = "#0000ff"
}
console.log(cores.verde);
console.log(cores['vermelho']);

// exemplo de erro
// console.log(cores['#fff']); //

// enum sem valor inicial
// nesse caso o valor inicial é 0
// e os valores seguintes são incrementados em 1
enum tipoUsuario{
    USER,
    PERITO,
    ADMIN
}
console.log(tipoUsuario.ADMIN);

// atribuindo valor do enum a uma variável
// o tipo da variável é o nome do enum
// nesse caso o tipo da variável é tipoUsuario
// o valor atribuído deve ser um dos valores do enum
// nesse caso o valor atribuído é 0 (tipoUsuario.USER)
// se tentar atribuir um valor que não está no enum, dará erro
const tp:tipoUsuario=tipoUsuario.USER; // tipoUsuario.USER
console.log(tp);