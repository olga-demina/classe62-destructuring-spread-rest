// 8. Operatore ternario
// 
// Voglio definire se un numero sia pari o dispari

const number = 6;

// metodo classico
// let result;
// if (number % 2 === 0) {
//     result = "pari";
// } else {
//     result = "dispari";
// }

// sugar sintax
const result = (number % 2 === 0) ? "pari" : "dispari";

console.log(result);

