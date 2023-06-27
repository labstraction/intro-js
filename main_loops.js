// CICLO WHILE-----------------------

// let indice = 0;

// while (indice < 10) {

//     console.log('sono un\'istruzione che deve essere ripetuta')

//     // indice = indice + 1;

//     // indice += 1;

//     indice++;
// }

// let indice = 0;

// while (indice < 100) {

//     if (indice % 2 === 0) {
//         console.log(indice);
//     }
//     // indice = indice + 1;
//     indice++;
// }

// while (true) {

//     const input = prompt('scrivi una frase o scrivi FINE per terminare');

//     if (input === 'FINE') {
//         alert('programma terminato')
//         break;
//     } else {
//         // alert('la lunghezza della frase inserita è ' + input.length + ' caratteri');
//         alert(`la lunghezza della frase inserita è ${input.length} caratteri`)
//     }

// }

// CICLO DO WHILE---------------------------------------------

// let indice = 10;

// do {

//     console.log('sono un\'istruzione che deve essere ripetuta');
//     indice++;

// } while (indice < 10);

// CICLO FOR---------------------------------------------------
// let indice = 0;
// while (indice < 10) {
//     console.log('sono un\'istruzione che deve essere ripetuta');
//     indice++;
// }

// for (let pippo = 0; pippo < 10; pippo++) {
//     console.log('sono un\'istruzione che deve essere ripetuta');
// }

// for (let index = 0; index < 100; index += 2) {
//     console.log('sono un numero pari e sono: ' + index)
// }

// for (let index = 0; index < 100; index++) {
//     if (index < 50) {
//         console.log(index * 2);
//     } else {
//         console.log(index / 2);
//     }
// }

// for (let index = 0; index < 100; index++) {
//     if (index < 50) {
//         const risultato = index * 2;
//         console.log(risultato);
//     } else {
//         const risultato2 = index / 2;
//         console.log(risultato2);
//     }
// }

// for (let index = 100; index >= 0; index--){
//     console.log(index);
// }

// for (let i = 100; i >= 0; i--) {

//     if (i % 2 === 0) {
//         console.log('pari', i)
//     } else {
//         console.log('dispari', i)
//     }

// }

// const paperone = 'scrivi una frase';

// for (let i = 0; i < 16; i++) {

//     const char = paperone[i];
//     console.log(char);

// }


// CICLI NESTATI--------------------------------


// console.log('inizio programma');

// for (let i = 0; i < 4; i++) {
//     console.log('inizio riga');
//     for (let j = 0; j < 4; j++) {
//         console.log('riga: ' + i + ', colonna: ' + j);
//     }
//     console.log('fine riga');
// }

// console.log('fine programma');


// CAPITOLO 2 ES 1-------------------

// let startingString = '#'

// for (let i = 0; i < 7; i++) {
//     console.log(startingString);
//     startingString = startingString + '#'
// }

// let startingString2 = '#';

// while(startingString2.length < 8){
//     console.log(startingString2);
//     startingString2 = startingString2 + '#';
// }

// CAPITOLO 2 ES 2--------------------------------

// for (let i = 1; i < 101; i++) {

//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }

// }

// CAPITOL0 2 ES 3----------------------------------------

// VERSIONE EASY

// let chessboard = '';

// for (let i = 0; i < 8; i++) {

//     if (i % 2 === 0) {
//         chessboard = chessboard + ' # # # #\n'
//     } else {
//         chessboard = chessboard + '# # # # \n'
//     }
    
// }

// console.log(chessboard);

// VERSIONE MENO EASY

// const size = 3;

// let chessboard = '';

// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if (i % 2 === 0) {
//             if (j % 2 === 0) {
//                 chessboard = chessboard + '□'; 
//             } else {
//                 chessboard = chessboard + '■'
//             }
//         } else {
//             if (j % 2 === 0) {
//                 chessboard = chessboard + '■'
//             } else {
//                 chessboard = chessboard + '□'; 
//             }
//         }
//         // se i è pari {
//             // se j è pari {
//                 //aggiungo a chessboard uno spazio
//             //} altrimenti {
//                 //aggiungo a chessboard un cancelletto
//             //}
//         //} altrimenti {
//             // se j è pari {
//                 //aggiungo a chessboard un cancelletto
//             //} altrimenti {
//                 //aggiungo a chessboard uno spazio
//             //}
//         //}
//     }
//     chessboard = chessboard + '\n'
//     //aggiungo a chessboard uno \n
// }

// console.log(chessboard);

// const size = 3;

// let chessboard = '';

// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         // if (i % 2 === 0 && j % 2 === 0) {
//         //     chessboard = chessboard + '□'; 
//         // } else if (i % 2 === 0 && j % 2 !== 0){
//         //     chessboard = chessboard + '■'
//         // } else if (i % 2 !== 0 && j % 2 === 0){
//         //     chessboard = chessboard + '■'
//         // } else if (i % 2 !== 0 && j % 2 !== 0){
//         //     chessboard = chessboard + '□'; 
//         // }

//         if (i % 2 === 0 && j % 2 === 0) {
//             chessboard = chessboard + '□'; 
//         } else if (i % 2 !== 0 && j % 2 !== 0){
//             chessboard = chessboard + '□'
//         } else {
//             chessboard = chessboard + '■'
//         }
        
//     }
//     chessboard = chessboard + '\n'
// }

// console.log(chessboard);


// const size = 3;

// let chessboard = '';

// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if ((i - j) % 2 === 0) {
//             chessboard = chessboard + '□'; 
//         }
//         if ((i - j) % 2 !== 0) {
//             chessboard = chessboard + '■'; 
//         }
//     }
//     chessboard = chessboard + '\n'
// }

// console.log(chessboard);

// const size = 3;

// let chessboard = '';

// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         const rowAndColumnEven = (i % 2 === 0 && j % 2 === 0);
//         const rowAndColumnOdd = (i % 2 !== 0 && j % 2 !== 0);
//         if (rowAndColumnEven || rowAndColumnOdd){
//             chessboard = chessboard + '□'; 
//         } else {
//             chessboard = chessboard + '■'; 
//         }
//     }
//     chessboard = chessboard + '\n'
// }

// console.log(chessboard);

