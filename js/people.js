/**
1 - names.js
    1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
    2. Esporta la funzione dal file.
2 - hobbies.js
    1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
    2. Esporta la funzione dal file.
3 - people.js
    1. Importa la tua funzione da names.js
    2. Importa la tua funzione da hobbies.js
    3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
 */

const myCont = require("./names.js");
//const { GetFullName } = require("./names.js");
let n1 = "Agostino", n2 = "Caruso";
const { GetAllHobbies } = require("./hobbies.js");
let h1 = "rugby", h2 = "gym", h3 = "";
function PrintObject() {
    return {
        fullName: myCont.GetFullName(n1, n2),
        hobbies: GetAllHobbies(h1, h2, h3),
    }
}
console.log(PrintObject());
// console.log(GetFullName(n1 || "default", n2 || "default"));
// console.log(GetAllHobbies(h1,h2,h3));
