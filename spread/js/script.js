
// 5. Operatore spread in array
const namesArray = ["Federico", "Davide", "Ludovica"];

const copyArray = namesArray;

console.log(namesArray, copyArray);

namesArray.push("Fabrizio");

console.log(namesArray);
console.log(copyArray);

// Vecchio modo
// const realCopyArray = [];
// 
// namesArray.forEach( name => realCopyArray.push(name));
// 
// console.log(realCopyArray);
// 
// namesArray.push("Fabrizio");
// 
// console.log(namesArray);
// console.log(realCopyArray);

const realCopyArray = [...namesArray];

console.log(realCopyArray, namesArray);

namesArray.push("Fabrizio");

console.log(realCopyArray, namesArray);

const secondArray = ["Eduard", "Karolina"];

const anotherArray = [...namesArray, ...secondArray];

console.log(anotherArray);

// 6. Operatore spread in oggetti

const person = {
    firstName: "Olga",
    lastName: "Demina",
    age: 36
}

const copyPerson = {...person};

person.email = "olga@gmail.com"

console.log(person, copyPerson);