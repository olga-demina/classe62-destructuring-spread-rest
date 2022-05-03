// 3. Sugar sintax array keys
const name = "Olga";
const age = 36;
const email = "olga@gmail.com";

// const person = {
//     name: name,
//     age: age,
//     email: email
// }

const person = {
    name,
    age,
    email
}

// 4. Chiavi dinamiche di un'oggetto
const userName = "Olga";
const userAge = 36;
const userEmail = "olga@gmail.com";

const newKey = prompt("Qual'è la chiave che vuoi inserire?");
const newValue = prompt("Inserisci il valore per questa chiave");

const person2 = {
    name: userName,
    age: userAge,
    email: userEmail,
    [newKey]: newValue
}


console.log(person2);