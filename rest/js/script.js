
// 7. Rest operator
// Numero arbitrario di argomenti
const sum = sumNumbers(2, 6);

console.log(sum);

function sumNumbers( ...args ) {
    let result = 0;
    args.forEach( number => {
        result += number;
    });
    return result;
}