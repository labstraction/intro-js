// // FUNZIONI------------------------------------------

// function square( specialNumber ){
//     const result = specialNumber * specialNumber;
//     return result;
// }

// function logUppercase(stringToLog){
//     const uppercaseString = stringToLog.toUpperCase()
//     console.log(uppercaseString);
// }

// function gentleAllert(){
//     alert('caro amico, non vorrei farmi gli affari tuoi, ma sarà il caso che ti metti a studiare!')
// }

// function logMultipleTimes(stringToLog, times){
//     for (let i = 0; i < times; i++) {
//         console.log(stringToLog);
//     }
// }

// function isEven(number){
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function pow(base, exponent){
//     const result = base ** exponent;
//     return result;
// }

// function lastCharUpperCase(selectedString){
//     const char = selectedString[selectedString.length - 1];
//     const charUpperCase = char.toUpperCase();
//     return charUpperCase;
// }

// //pippo  l=5
// //01234

// //clarabella  l=10
// //0123456789

// const pippo = square(16);

// console.log(pippo);

// logUppercase('viva le funzioni!')

// gentleAllert();

// logMultipleTimes('pizza', 100)

// const pluto = isEven(27);

// console.log(pluto);

// const paperino = pow(2, 10);

// console.log(paperino);

// const gastone = lastCharUpperCase('genova');

// console.log(gastone)

// SINTASSI ALTERNATIVE

// function square(number) {
//     // const result = number * number;
//     // return result;
//     return number * number;
// }

// const superSquare = square;

// console.log(square(3));
// console.log(superSquare(12));

// const square2 = function(number){
//     const result = number * number;
//     return result;
// } // anonymous function

// console.log(square2(10));

// const square3 = (number) => {
//     const result = number * number;
//     return result;
// } // lambda function (arrow function);

// console.log(square3(4));

// const square4 = number => number * number;

// const pow = (base, exponent) => base ** exponent;

// console.log(square4(8));

// console.log(pow(4, 3));

// PARAMETRI----------------------

// function logParameters(parameter1, parameter2){
//     console.log('parametro 1', parameter1);
//     console.log('parametro 2', parameter2);
// }

// logParameters('pippo', 5);

// logParameters(27);

// logParameters();

// function pow(base, exponent){

//     if (base === undefined) {
//         return "che cavolo stai facendo?!?!"
//     }

//     if (exponent !== undefined) {
//         const result = base ** exponent;
//         return result;
//     } else {
//         const result2 = base ** 2;
//         return result2;
//     }
// }

// const pippo = pow(4, 4);

// console.log(pippo);

// const pluto = pow(4);

// console.log(pluto);

// const paperino = pow();

// console.log(paperino);

// VALORI DI DEFAULT---------------------

// function pow(base, exponent = 2) {
//   const result = base ** exponent;
//   return result;
// }

// console.log(pow(5, 3));

// console.log(pow(5));

// const startingString = '11';

// const startingNumber = parseInt(startingString, 2);

// console.log(startingString, typeof startingString);

// console.log(startingNumber, typeof startingNumber);

//1) definire una funzione 'pow'
//   che non faccia uso dell' operatore '**'
//   ne della libreria Math

function pow(base, exponent){

    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result = result * base;
    }

    return result;
}


console.log('pow', pow(5, 4));




//2) definire una funzione 'correctCase' che
//   prende in input una stringa e la restituisce
//   trasformando la prima lettera in maiuscolo

function correctCase(selectedString){

    if (selectedString === undefined) {
        return '';
    }

    // viva pippo
    // 1 v
    // 2 V
    // 3 iva pippo
    // 4 Viva pippo

    const firstChar = selectedString[0];
    const firstCharUpper = firstChar.toUpperCase();
    const restOfTheString = selectedString.slice(1);
    const newString = firstCharUpper + restOfTheString;

    return newString;
}

console.log('correct case', correctCase('viva pippo'))

//3) defininire una funzione 'min' che dati due numeri
//   restituisce il minore

function min(firstNumber, secondNumber) {
    // if (firstNumber > secondNumber) {
    //     return secondNumber;
    // } else {
    //     return firstNumber;
    // }

    // OPERATORE TERNARIO----------------------------------------------

    // const minimum = firstNumber > secondNumber ? secondNumber : firstNumber;

    // return minimum;

    return firstNumber > secondNumber ? secondNumber : firstNumber;
}

console.log("min", min(5, 10));

//4) definire una funzione 'clamp' che prende come parametri
//   tre numeri: valore, massimo e minimo.
//   se valore è minore di minimo, restituisce minimo
//   se valore è maggiore di massimo, restituisce massimo
//   altrimenti restituisce valore

function clamp(value, min, max) {
    // if (value < min) {
    //     return min;
    // } else if (value > max){
    //     return max;
    // } else {
    //     return value;
    // }

    // if(min > max){
    //     console.log('sei un coglione!')
    // }

    if (value < min) {
        return min;
    }

    if (value > max) {
        return max;
    }

    return value;
}

console.log('clamp', clamp(12, 5, 10));


//5) definire una funzione chessboardString che prende come parametro
//   'size' e stampa la scacchiera

function chessBoard(size) {

    let chessboardString = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            if ((i - j) % 2 === 0) {
                chessboardString = chessboardString + "□";
            }
            if ((i - j) % 2 !== 0) {
                chessboardString = chessboardString + "■";
            }

        }

        chessboardString = chessboardString + "\n";

    }

    return chessboardString;
}

console.log('chessboard', chessBoard(19));

//6) definire una funzione 'ellipse' che prende come parametro una stringa
//   se la stringa è minore di 20 caratteri la ritorna non modificata
//   altrimenti la taglia a 20 caratteri e aggiunge 3 puntini

//   'ciao mamma!' => 'ciao mamma!'
//   'nel mezzo del cammin di nostra vita' = 'nel mezzo del cammin...'

function ellipse(selectedString, size = 20, endString = '...'){

    if (selectedString.length < size) {
        return selectedString;
    } else {

        const shortString = selectedString.slice(0, size);
        const ellipsedString = shortString + endString;
        return ellipsedString;

    }

}

console.log('ellipse', ellipse('nel mezzo del cammin di nostra vita'));
console.log('ellipse', ellipse('nel mezzo del cammin di nostra vita', 3));
console.log('ellipse', ellipse('nel mezzo del cammin di nostra vita', 10, ''));

//7) definire una funzione reverseString che data una stringa
//   la restituisca al contrario

//   'casa rosa' => 'asor asac'

function stringReverse(selectedString){

    let newString = '';

    for (let i = (selectedString.length - 1) ; i >= 0 ; i--) {
        const char = selectedString[i];
        // newString = newString + char;
        newString += char;
    }

    return newString;
}


console.log('reverse', stringReverse('la casa rosa'))
