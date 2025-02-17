console.log("hello word");

console.log("ciao mondo");

//typeof

console.log(typeof 5);
console.log(typeof "hello word");
console.log(typeof 5);
console.log(typeof true);


//NUMBER

5; //integer
7.68; //float

//310000
3.1e5;

Infinity; // numero più grande possibile
-Infinity; // numero più piccolo possibile

NaN; // Not a Number

console.log(typeof NaN);
console.log(0/0); //NaN

console.log("somma 5 + 7", 5 + 7);
console.log("sottrazione 5 - 7", 5 - 7);
console.log("negativo - 7", -7);
console.log("prodotto 5 * 7", 5 * 7);
console.log("divisione 5 / 7", 5 / 7);
console.log("potenza 2**5", 2**5);

//MODULO - resto della divisione intera
console.log('modulo 5 % 2', 5 % 2);
console.log('modulo 12 % 5', 12 % 5);

//MATH
console.log('radice quadrata 9', Math.sqrt(9));
console.log('arrotondmento 9.6', Math.round(9.6));

//STRING
console.log("234", 234);
console.log("io sono una stringa");
console.log('io sono una stringa');
console.log('io sono una "stringa"');
console.log("l'apostrofo è importante");
console.log("\"l'apostrofo\" è importante");
console.log("\"l'apostrofo\" è importante\nnon ne posso fare a meno");

console.log(`"l'apostrofo" è importante
non ne posso fare a meno`);

console.log(`la somma di 5 e 7 è ${7 + 5}`);

console.log('ciao a tutti'+' '+'mi chiamo pippo');

//BOOLEAN
console.log("vero", true);
console.log("falso", false);

//not
console.log("not true", !true);
console.log("not false", !false);

//and
console.log("true and true", true && true);
console.log("true and false", true && false);
console.log("false and true", false && true);
console.log("false and false", false && false);

//or
console.log("true or true", true || true);
console.log("true or false", true || false);
console.log("false or true", false || true);
console.log("false or false", false || false);

//undefind e null
console.log(typeof undefined);
console.log(typeof null);


//operatori di confronto

//ugualianza == / ===
console.log("5 è uguale a 5", 5 == 5);
console.log("5 è uguale a 6", 5 == 6);

console.log("5 è uguale a 5", 5 === 5);
console.log("5 è uguale a 6", 5 === 6);

console.log("la stringa 5 è uguale al numero 5", "5" == 5);
console.log("la stringa 5 è uguale al numero 5", "5" === 5);

//disugualianza
//ugualianza != / !==
console.log("la stringa 6 è diversa dal numero 6", "6" != 6);
console.log("la stringa 6 è diversa dal numero 6", "6" !== 6);

//confronto </<=/>/>=
console.log("5 è minore di 6", 5 < 6);
console.log("5 è maggiore di 6", 5 > 6)

console.log("a è maggiore di b","a" > "b");
console.log("a è maggiore di b","a" < "b");
console.log("a è maggiore di A","a" > "A");
console.log("b è maggiore di A","b" > "A");
console.log("stringa 1 è maggiore di a","1" > "a");


//Variabili - var, let, const

let pippo = 5;

console.log(pippo);

console.log(pippo + 2);

pippo = 'stocazzo';

console.log(pippo);


const pluto = 9;

console.log(pluto);

console.log(pluto + 2);

// pluto = 'stocazzo';

// console.log(pluto);

// NON USARE VAR MA USA LET
// paperino = 10;

// console.log(paperino)

// var paperino;

// topolino = 10;

// console.log(topolino)

// let topolino;

let pippo2 = 5 * 5;
console.log(pippo2);

//CamelCase
const numeroDaElevareAPotenza = 9;
const esponenteDellaPotenza = 2;

console.log(numeroDaElevareAPotenza ** esponenteDellaPotenza);


//short circuit operator

const qui = 5 || 6;
console.log(qui);

const qui2 = false || 6;
console.log(qui2);

const qua = 5 ?? 6;
console.log(qua);

const qua2 = false ?? 6;
console.log(qua2);

const qua3 = undefined ?? 6;
console.log(qua3);

//operatore ternario

const quo = (5 > 4) ? 10 : 20;
console.log(quo);

const quo2 = (5 < 4) ? 10 : 20;
console.log(quo2);
