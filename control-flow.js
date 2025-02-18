console.log(console.log('ciao'));

// console.log(prompt("come ti chiami?"))

// const userName = prompt("come ti chiami?");

// console.log("ciao " + userName);


//IF

// const userAgeString = prompt("quanti anni hai?");

// if(parseInt(userAge) > 18){
//     console.log("benvenuto nel sito di incontri piccanti")
// } else {
//     console.log("torna a mangiare il gelatino")
// }

// const userAgeNumber = parseInt(userAgeString);

// if(userAgeNumber >= 18 && userAgeNumber < 80){
//     console.log("benvenuto nel sito di incontri piccanti");
// } else if (userAgeNumber >= 80){
//     console.log("il cuore potrebbe non reggere");
// } else {
//     console.log("torna a mangiare il gelatino");
// }


// CICLI

//while


// let i = 0
// while (i < 11) {
//     console.log(i);
//     // i = i + 1;
//     i++;
// }
// console.log('ho finito il ciclo while')


// let j = 0
// while (j < 11) {
//     console.log(j);
//     // j = j + 2;
//     j += 2;
// }
// console.log('ho finito il ciclo while')

// let k = 10
// while (k >= 0) {
//     console.log(k);
//     // k -= 2;
//     k--
// }
// console.log('ho finito il ciclo while')


// let i = 0;
// while (i <= 10) {
//     const square = i ** 2;
//     console.log(square);
//     i++;
// }
// const secretNumber = Math.round(Math.random() * 10);

// while (true) {
//     const guessedString = prompt("indovina il numero che sto pensando (da 0 a 10)...")
//     const guessedNumber = parseInt(guessedString);
//     if (guessedNumber === secretNumber) {
//         alert("bravo, sei un campione!!!");
//         break;
//     } else {
//         alert("schiappa!!!");
//     }
// }

// let startingString = '';

// while(startingString.length < 10){
//     startingString = startingString + '*';
// }

// console.log(startingString);

// do...while

// const pippo = 10;
// const pluto = 20;

// while (pippo > pluto) {
//     console.log('sono entrato ne while!!')
// }


// do {
//     console.log('sono entrato nel do...while!!')
// } while (pippo > pluto);

//FOR

// for (let i = 0; i < 10; i++) {
//     console.log('sono nel ciclo for e sto facendo il giro ' + i)
// }



// let startingString = ""
// for (;;) {
//     startingString += '°'
//     if (startingString.length === 10) {
//         break;
//     }
// }
// console.log(startingString)

// for (let y = 0; y <= 3; y++) {
//     for (let x = 0; x <= 3; x++) {

//         console.log(`(x: ${x}, y: ${y})`)

//     }
// }


// for (let y = 0; y <= 3; y++) {
//     let row = '';
//     for (let x = 0; x <= 3; x++) {
//         row += `(x: ${x}, y: ${y}) `;
//     }
//     console.log(row);
// }

// 1) "" + "(x: 0, y: 0)"
// 2) "" + "(x: 0, y: 0)" + "(x: 1, y: 0)"
// 3) "" + "(x: 0, y: 0)" + "(x: 1, y: 0)" + "(x: 2, y: 0)"
// 4) "" + "(x: 0, y: 0)" + "(x: 1, y: 0)" + "(x: 2, y: 0)" + "(x: 3, y: 0)"

// 5) "" + "(x: 0, y: 1)"
// 6) "" + "(x: 0, y: 1)" + "(x: 1, y: 1)"
// 7) "" + "(x: 0, y: 1)" + "(x: 1, y: 1)" + "(x: 2, y: 1)"
// 8) "" + "(x: 0, y: 1)" + "(x: 1, y: 1)" + "(x: 2, y: 1)" + "(x: 3, y: 1)"


// "" + "(x: 0, y: 0)" + "(x: 1, y: 0)" + "(x: 2, y: 0)" + "(x: 3, y: 0)"
// "" + "(x: 0, y: 1)" + "(x: 1, y: 1)" + "(x: 2, y: 1)" + "(x: 3, y: 1)"

//switch

// const ageString = prompt('in che anno sei nato?')

// switch (ageString) {
//     case "1978":
//         alert("sei nato nel mio stesso anno!!");
//         break;
//     case "1990":
//         alert("sei nato nell'anno dei mondiali in italia!!");
//         break;
//     case "1984":
//         alert("sei nato nell'anno di laura!!!");
//         break;
//     default:
//         alert("che anno noioso!");
//         break;
// }

