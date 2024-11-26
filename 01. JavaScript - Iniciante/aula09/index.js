let umaString = 'Olá mundo!';

console.log(umaString[4]);//ver 
console.log(umaString.charAt(4))
console.log(umaString.concat('Estou programando em JS!','Recomendo!'));
console.log(umaString.indexOf('mundo'));//descobrir onde começa a palavra mundo
console.log(umaString.lastIndexOf('d'));//começa do final para a frente
console.log(umaString.match(/[a-z]/g));//retorna letras minusculas 
console.log(umaString.replace(/m/g, '#')); //substitui a letra
console.log(umaString.length); //tamanho da string
console.log(umaString.slice(4,9)); //pega o intervalo em uma string
console.log(umaString.toUpperCase()); //tudo maiusculo
console.log(umaString.toLowerCase()); //tudo minusculo