// let startingString = "";
// while (startingString.length <= 6) {
//     startingString = startingString + "#";
//     console.log(startingString)
// }

// for (let i = 1; i <= 7; i++) {
//     console.log("#".repeat(i));   
// }


// let piramide = ""
// let altezza = parseInt(prompt("quante righe vuoi che sia alta la piramide?"))
// if(altezza>0){
//     for (let i = 0; i < altezza; i++) {
//         piramide += "#";
//         console.log(piramide);
//      }
// }
// else{
//     alert("devi inserire un numero positivo")
// }

// for (let startString = '#'; startString.length <= 7; startString += '#') {
//     console.log(startString)
// }


// let i = 1;
// while (i <= 100) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//         console.log("fizz");
//     } else if (i % 5 === 0) {
//         console.log("buzz");
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// let size = 8;
// let scacchiera = "";
// for (let y = 0; y < size; y++) {
//     if(size % 2 !== 0){
//         if (y % 2 === 0) {
//             scacchiera += " ";
//         }
//         else {
//             scacchiera += "#";
//         }
//     }
//     for (let x = 0; x < Math.floor(size/2); x++) {

//         if (y % 2 === 0) {
//             if(size % 2 === 0){
//                 scacchiera += " #";
//             }
//             else{
//                 scacchiera += "# ";
//             }
//         }
//         else {
//             if(size % 2 === 0){
//                 scacchiera += "# ";
//             }
//             else{
//                 scacchiera += " #";
//             }
//         }
//     }
//     scacchiera += "\n";
// }
// console.log(scacchiera);

// let size = 5
// let stringResult = ''

// for (let row = 0; row < size; row++) {

//     let newRow = ''
//     for (let col = 0; col < size; col++) {

//         if (row % 2 === 0) {
//             if (col % 2 === 0) {
//                 newRow += ' '
//             } else {
//                 newRow += '#'
//             }
//         } else {
//             if (col % 2 === 0) {
//                 newRow += '#'
//             } else {
//                 newRow += ' '
//             }
//         }

//     }
//     stringResult += `${newRow}\n`

// }

// console.log(stringResult)

// let size = 8
// let stringResult = ''

// for (let row = 0; row < size; row++) {
//     let newRow = ''
//     for (let col = 0; col < size; col++) {

//         // nota bene gli spazi finiscono sempre nelle caselle
//         // la cui somma di riga e colonna sono pari

//         if ((row + col) % 2 === 0) {
//             newRow += ' '
//         } else {
//             newRow += '#'
//         }

//     }
//     stringResult += `${newRow}\n`
// }
// console.log(stringResult)




// ESERCIZI PER CASA

// 1 - usando un ciclo crea una piramide come quella del primo 
// esercizio del libro utilizzando solo UN console.log

// 2 - usando un ciclo crea una piramide come quella del primo 
// esercizio del libro ma capovolta

// 3 - usando un ciclo crea una piramide come quella dell'esempio:
//     #
//    ###
//   #####
//  #######
// #########

// 4 - usando un ciclo logga i numeri da 100 a -100

for (let i = 100; i >= -100; i--) {
    console.log(i);

}

// 5 - usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7

// 6 - usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti

// 7 - chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0

// 8 - chiedi all'utente un numero (qualsiasi) di partenza e poi logga tutti i numeri dal numero dato fino a 100

// 9 - chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente

// 10 - chiedi all'utente quanti anni ha e il suo genere e digli quante ore ha gia' vissuto e quante ore gli rimangono da vivere
