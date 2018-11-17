// const soma = function(numero1, numero2) {
//   return numero1 + numero2;
// };

// const soma = (numero1, numero2) => {
//   return numero1 + numero2;
// };

// const soma = (numero1, numero2) => numero1 + numero2;

// console.log(soma(5, 2));

const imprimeNome = nome => console.log("Nome: " + nome);

imprimeNome("Luna");

// const podeBeber = idade => {
//   if (idade >= 18) {
//     return "SIM";
//   } else {
//     return "NÃO";
//   }
// }

// const podeBeber = idade => {
//   if (idade >= 18) {
//     return "SIM";
//   } 
//   return "NÃO";
// }

// const podeBeber = idade => {
//   return idade >= 18 ? "SIM" : "NÃO"; 
// }

const podeBeber = idade => (idade >= 18 ? "SIM" : "NÃO");

console.log(podeBeber(0));






