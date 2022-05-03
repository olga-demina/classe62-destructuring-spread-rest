// 1. Descructuring in objects
const person = {
    firstName: "Olga",
    lastName: "Demina",
    age: 36
}

// vecchio metodo
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

// Crea le tre varibili, dall'oggetto person preleva i valori corrispondenti alle chiavi che hanno lo stesso nome delle variabili creati
const {age, firstName, lastName} = person;
console.log(firstName, lastName, age);
console.log(person);

console.log(`Ciao ${firstName}`);

// 2. Desctructuring in Array
const namesArray = ["Carlo", "Alex", "Olga"];

// vecchio metodo 
// const firstElement = namesArray[0];
// const secondElement = namesArray[1];


const [firstElement, ,thirdElement] = namesArray;

console.log(firstElement, thirdElement);