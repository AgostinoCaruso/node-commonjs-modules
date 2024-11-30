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
//liste
const nomi = [
    "Alessandro",
    "Francesco",
    "Luca",
    "Marco",
    "Giulia",
    "Sofia",
    "Emma",
    "Olivia",
    "Lorenzo",
    "Davide",
    "Elijah",
    "James",
    "Gabriel",
    "Michael",
    "Daniel",
    "Sophia",
    "Mia",
    "Charlotte",
    "Amelia",
    "Harper",
    "Evelyn",
    "Abigail",
    "Emily",
    "Hannah"
];
const cognomi = [
    "Rossi",
    "Bianchi",
    "Romano",
    "Esposito",
    "Rizzo",
    "Ferrari",
    "Russo",
    "Marino",
    "Bruno",
    "Conti",
    "De Luca",
    "Giordano",
    "Lombardi",
    "Moretti",
    "Santoro",
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martinez",
    "Garcia",
    "Rodriguez",
    "Lopez",
    "Gonzalez"
];
const hobby = [
    "Calcio",
    "Pallacanestro",
    "Tennis",
    "Nuoto",
    "Ciclismo",
    "Corsa",
    "Pattinaggio",
    "Sci",
    "Snowboard",
    "Surf",
    "Kite surf",
    "Vela",
    "Pescare",
    "Caccia",
    "Fotografia",
    "Musica",
    "Pittura",
    "Scultura",
    "Cucina",
    "Giardinaggio",
    "Lettura",
    "Scrittura",
    "Viaggiare",
    "Esplorare",
    "Ricercare",
    "Sviluppare software",
    "Giochi da tavolo",
    "Videogiochi",
    "Yoga",
    "Meditazione",
    "Passeggiare",
    "Cantare",
    "Ballare"
];

const { GetFullName } = require("./names.js");
const { GetAllHobbies } = require("./hobbies.js");
//add custom name/hobby
let n1 = "", n2 = "";
let h1 = "", h2 = "", h3 = "";
//to prevent a double hobby word, isnt perfect since it has only 1 var to store the prev number, hobbies are 3
let ranNum = 0,lastNum=-1;
//!WITH CHOICE--------------------------------------------------------
//#region CHOICE

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

GetInputFromUser();

//#endregion
//!STANDARD--------------------------------------------------------
//#region STANDARD

//0 for obj 1 for string

// const myObject = GetObject(0);
// console.log(myObject);

//#endregion
function GetObject(num) {
    switch (num) {
        case 0://oggetti
            return {
                fullName: GetFullName(CheckTypo(n1, RandomGenString(nomi)), CheckTypo(n2, RandomGenString(cognomi))),
                hobby: GetAllHobbies(CheckTypo(h1, RandomGenString(hobby)), CheckTypo(h2, RandomGenString(hobby)), CheckTypo(h3, RandomGenString(hobby))),
            }
        case 1://stringhe
            return {
                fullName: ObjToString(GetFullName(CheckTypo(n1, RandomGenString(nomi)), CheckTypo(n2, RandomGenString(cognomi)))),
                hobby: ObjToString(GetAllHobbies(CheckTypo(h1, RandomGenString(hobby)), CheckTypo(h2, RandomGenString(hobby)), CheckTypo(h3, RandomGenString(hobby)))),
            }
    }
}
//return a string from an object es: person={firstName,secondName} => "firstName secondName" and cut last white space
function ObjToString(obj) {
    let acc = "";
    let count = 0;
    const objLength = Object.keys(obj).length;
    for (let key in obj) {
        count++;
        if(count!==objLength){
            acc += obj[key] + " ";
        }else{
            acc += obj[key] + "!";
        }
    }
    return acc;
}
//check if you dont write a name or an hobby, returning stringDefault which i implement with RandomGenString taking argument from arrays
function CheckTypo(string, stringDefault) {
    return string || stringDefault;
}
//if you dont type a name or hobby then he will random catch a word with the same context
let lastNum1 = -1,lastNum2 = -1,lastNum3 = -1;
function RandomGenString(array) {
    let randomString = "";
    //let ranNum = GetRandomNum(array.length);
    while(ranNum===lastNum){
        ranNum = GetRandomNum(array.length);
    }
    lastNum = ranNum;
    return randomString = array[ranNum];
}
//generate random num
function GetRandomNum(maxNum) {
    return Math.floor(Math.random() * maxNum);
}
function GetInputFromUser(){
    rl.question("------------\nwrite 0 for obj and 1 for strings\n------------\n", (value) => {
        //i cast the string from input to an integer
        const numValue = parseInt(value);
        //i pass the obj or a string from the GetObject func
        const myObject = GetObject(numValue);
        console.clear();
        switch (numValue) {
            case 0:
                console.log(myObject);
                break;
            case 1:
                console.log(`My name is: ${myObject.fullName}\nMy hobbies are: ${myObject.hobby}\n\n`);
                break;
            default:
                console.log("wrong choice");
                break;
        }
        rl.close();
    });
}