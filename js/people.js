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

//const myCont = require("./names.js");
const { GetFullName } = require("./names.js");
let n1 = "Agostino", n2 = "Caruso";
const { GetAllHobbies } = require("./hobbies.js");
let h1 = "rugby", h2 = "gym", h3 = "";


//0 for obj 1 for string
const myObject = PrintObject(0);
console.log(myObject);

function PrintObject(num) {
    switch (num) {
        case 0://oggetti
            return {
                fullName: GetFullName(n1, n2),
                hobby: GetAllHobbies(CheckTypo(h1,"no hobby"), CheckTypo(h2,"no hobby"), CheckTypo(h3,"no hobby")),
            }
        case 1://stringhe
            return {
                fullName: ObjToString(GetFullName(CheckTypo(n1,""), CheckTypo(n2,""))),
                hobby: ObjToString(GetAllHobbies(CheckTypo(h1,"no hobby"), CheckTypo(h2,"no hobby"), CheckTypo(h3,"no hobby"))),
            }
    }

}

function ObjToString(obj){
    let acc = "";
    for(let key in obj){
        acc+=obj[key] + " ";
    }
    return acc.trim();
}

function CheckTypo(string, stringDefault){
    return string || stringDefault;
}

function RandomName(listaNomi){
    let randomName = "";
    
}

