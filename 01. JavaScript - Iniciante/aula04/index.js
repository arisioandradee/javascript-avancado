//Não podemos ter constantes com palavras reservadas
// Case-sensitive, camelCase

const nome = 'Arisio Andrade';
//nome = 'teste' nao pode modificar o valor da variavel
console.log(nome);

const primeiroValor = 15;
const segundoValor = primeiroValor;
console.log(segundoValor);

console.log(typeof(primeiroValor)); //number