////MAP


const testArray = [2, 5, 7, 1, 0, 100, 103];

// function add2ToArray(arrayOfNumbers){
//     const parkingArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const number = arrayOfNumbers[i];

//         const newNumber = number + 2;

//         parkingArray.push(newNumber);
        
//     }

//     return parkingArray;
// }


// const newArray = add2ToArray(testArray);
// console.log('add2', newArray);


// function addIndexToArray(arrayOfNumbers){
//     const parkingArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const number = arrayOfNumbers[i];

//         const newNumber = number + i;

//         parkingArray.push(newNumber);
        
//     }

//     return parkingArray;
// }

// const newArray2 = addIndexToArray(testArray);
// console.log('addIndex', newArray2);

//             ///testArray //AddIndex
// function map(array, mappingFunction){
//     const parkingArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         const newElement = mappingFunction(element, i, array)

//         parkingArray.push(newElement);
        
//     }
//     return parkingArray;
// }

// function add2(numb){
//     const newNumber = numb + 2;
//     return newNumber;
// }

// // const newArray3 = map(testArray, add2);
// const newArray3 = testArray.map(add2)
// console.log('newAdd2ToArray', newArray3);


// function addIndex(numb, index){
//     const newNumber = numb + index;
//     return newNumber;
// }

// // const newArray4 = map(testArray, addIndex);
// const newArray4 = testArray.map(addIndex);
// console.log('newAddIndexToArray', newArray4);


const testArray2 = ['pippo', 'pluto', 'paperino', 'clarabella', 'minnie'];

// function toUppercase(str){
//     const newString = str.toUpperCase();
//     return newString;
// }

// // const newArray5 = map(testArray2, toUppercase);
// const newArray5 = testArray2.map(toUppercase)
// console.log('toUpper', newArray5);


// //// funzione che aumenta di tre tutti gli elementi di testArray
// const newArray6 = testArray.map(numb => numb + 3);
// console.log('add3ToArray', newArray6);

// //// funzione che aumenta di quattro tutti gli elementi di testArray
// const add4 = (numb) => numb + 4

// const newArray7 = testArray.map(add4);
// console.log('add4ToArray', newArray7);


// /// funzione che a ogni numero di testArray sottrae il doppio del suo indice
// const newArray8 = testArray.map((nbr, i) => nbr - (2 * i));
// console.log('subtractDoubleIndex', newArray8);

// /// funzione che restituisce un array con le lunghezze delle stringhe di testArray2
// const newArray9 = testArray2.map(str => str.length);
// console.log('string length', newArray9);

// /// funzione che appende a tutte le stringhe di testArray2 la parola "banana"
// const newArray10 = testArray2.map(str => str + 'banana');
// console.log('string banana', newArray10);


///FILTER

// function keepEven(arrayOfNumbers){
//     const parkingArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const number = arrayOfNumbers[i];

//         if (number % 2 === 0) {
//             parkingArray.push(number)
//         }

//     }

//     return parkingArray;
// }

// const newArray11 = keepEven(testArray);
// console.log('keep even', newArray11);


// function filter(array, filteringFunction){
    
//     const parkingArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (filteringFunction(element, i, array)) {
//             parkingArray.push(element)
//         }

//     }

//     return parkingArray;

// }

// function isEven(nbr){
//     if(nbr % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// // const newArray12 = filter(testArray, isEven);
// const newArray12 = testArray.filter(isEven);
// console.log('new keep even', newArray12);


// //funzione che tiene dentro testArray tutti i numeri minori di 5
// const newArray13 = testArray.filter(nbr => nbr < 5);
// console.log('keep small numbers', newArray13);

// //funzione che tiene dentro testArray2 tutte le parole più lunghe di 6 caratteri
// const newArray14 = testArray2.filter(str => str.length > 6);
// console.log('keep long string', newArray14);

// //funzione che rimuove da testArray2 tutte le stringhe con indice pari
// // const newArray15 = testArray2.filter((str, i) => i % 2 === 1)
// const newArray15 = testArray2.filter((_, i) => i % 2 === 1)
// console.log('keep odd index', newArray15);

///REDUCE
// function sumAll(arrayOfNumbers){

//     let accoumulator = 0;

//     for (let i = 0; i < arrayOfNumbers.length; i++) {

//         const number = arrayOfNumbers[i];

//         accoumulator = accoumulator + number;

//     }

//     return accoumulator;
// }

// const sum = sumAll(testArray)
// console.log('sum all', sum);


// //const testArray = [2, 5, 7, 1, 0, 100, 103];


// function reduce(array, reducingFunction, startingAccumulator){
//                         //""
//     let accoumulator = startingAccumulator;

//     for (let i = 0; i < array.length; i++) {

//         const current = array[i];
 
//         accoumulator = reducingFunction(accoumulator, current, i, array);
//     }
//     return accoumulator;
// }
//                         //14         //1
// function sum2Numbers(accoumulator, current){
//     const newAccumulator = accoumulator + current;
//     return newAccumulator;
// }

// // const sum1 = reduce(testArray, sum2Numbers, 0)
// const sum1 = testArray.reduce(sum2Numbers, 0)
// console.log('new sum all', sum1)

// // concatena le stringhe di testArray2
// const sumString = testArray2.reduce((a, c) => a + c, "");
// console.log('sum all strings', sumString)

// // moltiplica tra loro tutti i numeri di testArray
// const product = testArray.reduce((a, c) => a * c, 1);
// console.log('multiplyAll', product);

// ///rimuovi le parolecon indice pari e rendi maiuscola la prima lettera delle altre

// const stocazzo = testArray2.filter((_, i) => i % 2 === 1)
//                            .map(str => {
//                                 const firstChar = str[0];
//                                 const restOfStr = str.slice(1);
//                                 const newStr = firstChar.toUpperCase() + restOfStr;
//                                 return newStr;
//                            });

// console.log('primo pezzettino', stocazzo);

// const stocazzo2 = testArray2.reduce((a, c, i) => {
//     if(i % 2 === 1) {
//         const firstChar = c[0];
//         const restOfStr = c.slice(1);
//         const newStr = firstChar.toUpperCase() + restOfStr;
//         a.push(newStr);
//         return a;
//     } else {
//         return a;
//     }
// }, []);

// console.log('super reduce', stocazzo2);


// function isOdd(number){
//     if (i % 2 === 1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function capitalizeFirstChar(str){
//     const firstChar = str[0];
//     const restOfStr = str.slice(1);
//     const newStr = firstChar.toUpperCase() + restOfStr;
//     return newStr;
// }


// const stocazzo3 = testArray2.filter(isOdd)
//                            .map(capitalizeFirstChar);

//FIND


function isEven(nbr){
    // if(nbr % 2 === 0){
    //     return true;
    // } else {
    //     return false;
    // }
    return nbr % 2 === 0;
}

console.log(testArray.filter(isEven));
console.log(testArray.find(isEven));

//SOME
console.log(testArray.some(isEven));

//EVERY
console.log(testArray.every(isEven));


//SORT
// function sortingFunctionFromBiggerTOSmaller(first, second){
//     if (first < second) {
//         return 1;
//     } else if( first > second){
//         return -1;
//     } else {
//         return 0;
//     }
// }

// function sortingFunctionFromSmallerToBigger(first, second){
//     if (first > second) {
//         return 1;
//     } else if( first < second){
//         return -1;
//     } else {
//         return 0;
//     }
// }

// testArray.sort(sortingFunctionFromSmallerToBigger)

//Numeri in ordine crescente
//testArray.sort((f, s) => f - s)

//Numeri in ordine decrescente
// testArray.sort((f, s) => s - f)

// console.log(testArray);

//dalla A alla Z
// testArray2.sort((fString, sString) => fString.localeCompare(sString))

//dalla Z alla A
// testArray2.sort((fString, sString) => sString.localeCompare(fString))

// console.log(testArray2);

function betterSort(array, sortingFunction){
    const newArray = [...array];
    newArray.sort(sortingFunction);
    return newArray;
}

const sortedArray = betterSort(testArray2, (fString, sString) => fString.localeCompare(sString));

console.log(testArray2);
console.log(sortedArray);