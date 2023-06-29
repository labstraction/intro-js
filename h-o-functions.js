//HIGHER ORDER FUNCTIONS------------
//MAP----------------------------------------

// function addOneToArray(arrayOfNumbers){

//     let tempArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];
        
//         const newElement = element + 1;

//         tempArray.push(newElement);
//     }

//     return tempArray;
// }


// console.log(addOneToArray([3, 7, 0]));


// function divideByTwoArray(arrayOfNumbers){

//     let tempArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];
        
//         const newElement = element/2; 

//         tempArray.push(newElement);
//     }

//     return tempArray;

// }


// console.log(divideByTwoArray([3, 7, 0]))


// function map(array, transFunc){

//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         const newElement = transFunc(element);

//         tempArray.push(newElement);
//     }

//     return tempArray;
// }


// function addOne(element){
//     const newElement = element + 1;
//     return newElement;
// }

// function divideByTwo(element){
//     const newElement = element / 2;
//     return newElement;
// }


// console.log(map([7, 10, 34], addOne))
// console.log(map([7, 10, 34], divideByTwo))


// const testArray = [12, 34, 5, 0, -23];

// function multiplyBy2(element){
//     const newElement = element * 2;
//     return newElement;
// }

// console.log(testArray.map(multiplyBy2));
// console.log(testArray.map((element) => element * 2))



// const testArray2 = ['CIAO', 'qui', 'sticazzi', 'il sole splende vincitore'];

// function getStringLength(element){
//     const length = element.length;
//     return length;
// }

// console.log(testArray2.map((element) => element.length))
// console.log(testArray2.map(getStringLength))


// function multiplyByIndex(element, i, originalArray){
//     const newElement = element * i;
//     return newElement;
// }

// console.log(testArray.map(multiplyByIndex));
// console.log(testArray.map((element, index) => element * index))

//FILTER-------------------------------------------------------

// function removeNegative(array){
//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         if (element >= 0) {
//             tempArray.push(element);
//         }
//     }

//     return tempArray;
// }

// console.log(removeNegative([0, 3, 5, -2 ,-5, 8]));


// function filter(array, filterFunc){

//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         if (filterFunc(element)) {
//             tempArray.push(element);
//         }
//     }

//     return tempArray;
// }

// function isPositive(element){
//     if (element >= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(filter([0, 3, 5, -2 ,-5, 8], isPositive));

// const testArray3 = [3, 5, 4, 8, 20, 21];

// function isEven(element){
//     if(element % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(testArray3.filter(isEven));

// console.log(testArray3.filter(element => element % 2 === 0));

// function isIndexEven(element, index, originalArray){
//     if(index % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }


// console.log(testArray3.filter(isIndexEven));

// console.log(testArray3.filter((element, index) => index % 2 === 0));

//REDUCE-----------------------------------------------

// function sumAll(array){

//     let accumulator = 0;

//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];

//         accumulator = accumulator + current;
        
//     }

//     return accumulator;

// }

// console.log(sumAll([23, 4, 4, 6, 3]));

// function reduce(array, reduceFunc, startingValue){

//     let accumulator = startingValue;

//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];

//         accumulator = reduceFunc(accumulator, current, i, array);
        
//     }

//     return accumulator;

// }

// function sum(accumulator, current){
//     console.log('accumulator', accumulator);
//     console.log('current', current);
//     const newAccumulator = accumulator + current;
//     return newAccumulator;
// }


// console.log(reduce([23, 4, 4, 6, 3], sum, 0));

// const testArray4 = [4, 3, 2, 1];

// function multiply(acc, curr) {
//     // const newAcc = acc * curr;
//     // return newAcc;
//     return acc * curr;
// }

// console.log(testArray4.reduce(multiply, 1));
// console.log(testArray4.reduce((acc, curr) => acc * curr, 1));


// const multiplyLambda = (acc, curr) => {
//     const newAcc = acc * curr;
//     return newAcc;
// }

// const multiplyLambda2 = (acc, curr) => acc * curr;


// console.log(testArray4.reduce((acc, curr) => {
//     const newAcc = acc * curr;
//     return newAcc;
// }, 1));

// function sumOnlyOddIndex(acc, curr, index, originalArray){
//     if(index % 2 !== 0){
//         const newAcc = acc + curr; 
//         return newAcc;
//     } else {
//         return acc;
//     }
// }

// console.log(testArray4.reduce(sumOnlyOddIndex, 0));


// function sumAll2(array){

//     let accumulator = array[0];

//     for (let i = 1; i < array.length; i++) {
//         const current = array[i];

//         accumulator = accumulator + current;
        
//     }

//     return accumulator;

// }

// console.log(sumAll2([2,3,4]))
// console.log(sumAll([2,3,4]))


//console.log(testArray4.reduce(sum))
//console.log(testArray4.reduce(sum, 0))


// FUNZIONI CHE RESTITUISCONO FUNZIONI


// function multiplyBy2(number){
//     const result = number * 2;
//     return result;
// }

// function multiplyBy4(number){
//     const result = number * 4;
//     return result;
// }


// console.log(multiplyBy2(3));
// console.log(multiplyBy4(3));


// function multiplyGenerator(multiplicator){

//     const multiplyFunction = function(number){
//         const result = number * multiplicator;
//         return result;
//     }

//     return multiplyFunction;

// }


// const multiplyBy5 = multiplyGenerator(5);

// console.log(multiplyBy5(3));

// const multiplyBy10 = multiplyGenerator(10);

// console.log(multiplyBy10(3));

// console.log(multiplyGenerator(100)(3));


// function prefix(prefixStr) {
//     const prefixFunction = (str) => prefixStr + ' ' + str;
//     return prefixFunction;
// }

// const itaPrefix = prefix('+39');

// console.log(itaPrefix('3339917218'));

// const frPrefix = prefix('+33');

// console.log(frPrefix('3339917218'));


// ESERCIZI-------------------------------------------------

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// // 1) mapping function che prende in input un array di numeri
// //    e restituisce un array con tutti i numeri diminuiti di uno

// function minusOne(element) {
//     // const newElement = element - 1;
//     // return newElement;
//     return element - 1;
// }

// console.log(numbersArray.map(minusOne));


// console.log(numbersArray.map(element => element - 1))


// console.log(numbersArray.map(function(element){
//     return element -1;
// }))

// // 2) mapping function che prende in input un array di numeri
// //    e restituisce un array con i il valore assoluto dei numeri

// function abs(element) {
//     return Math.abs(element);
// }

// console.log(numbersArray.map(abs));


// console.log(numbersArray.map(element => Math.abs(element)))



// // 3) mapping function che prende in input un array di numeri
// //    e restituisce un array di strighe con scritto 'PARI' se il numero
// //    corrispondente è pari o 'DISPARI' se il numero corrispondente è dispari

// function toPariOrDispari(element) {
//     if (element % 2 === 0) {
//         return 'pari';
//     }
//     return 'dispari';
// }

// console.log(numbersArray.map(toPariOrDispari));


// console.log(numbersArray.map(element => element % 2 === 0 ? 'pari' : 'dispari'))


// // 4) mapping function che prende in input un array di stringhe
// //    e le restituisce tutte minuscole

// function toLower(element) {
//     return element.toLowerCase()
// }

// console.log(stringsArray.map(toLower));


// console.log(stringsArray.map(element => element.toLowerCase()))


// // 5) mapping function che prende in input un array di strighe
// //    e restituisce un array di numeri con le lunghezze delle stringhe

// function countLength(element) {
//     return element.length;
// }

// console.log(stringsArray.map(countLength));


// console.log(stringsArray.map(element => element.length))



// // 7) filter function che prende in input un array di stringhe
// //    e restituisce solo quelle più lunghe di tre caratteri

// function isLengthGreaterThan3(element) {
//     // if(element.length > 3){
//     //     return true;
//     // }
//     // return false;
//     return element.length > 3;
// }

// console.log(stringsArray.filter(isLengthGreaterThan3));


// console.log(stringsArray.filter(element => element.length > 3))


// // 8) filter function che prende in input un array di strighe
// //    e restituisce solo quelle che contengono la lettera 'p'

// function containsLetterP(element) {
//     if (element.toLowerCase().includes('p')) {
//         return true;
//     }
//     return false;
// }

// console.log(stringsArray.filter(containsLetterP));


// console.log(stringsArray.filter(element => element.toLowerCase().includes('p')))


// // 9) filter function che prende in input un array di numeri
// //    e restituisce i positivi divisibili per 3

// function isPositiveAndDivisibleBy3(element) {
//     if (element >= 0 && element % 3 === 0 ) {
//         return true;
//     } 
//     return false;
// }

// console.log(numbersArray.filter(isPositiveAndDivisibleBy3));
// console.log(numbersArray.filter(element => element >= 0 && element % 3 === 0))

// //10) reduce function che dato un array di stringhe somma tutte le lunghezze

// function sumLength(acc, curr){
//     return acc + curr.length;
// }

// console.log(stringsArray.reduce(sumLength, 0))
// console.log(stringsArray.reduce((a, c) => a + c.length , 0))

// //11) reduce function che dato un array di stringhe somma le lunghezze delle ultime 3

// function sumLengthIfLast3(acc, curr, index, originalArray){
//     if (index >= originalArray.length - 3) {
//         return acc + curr.length;
//     }
//     return acc;
// }

// console.log(stringsArray.reduce(sumLengthIfLast3, 0))
// console.log(stringsArray.reduce((a, c, i, o) => i >= o.length - 3 ? a + c.length : a, 0))


//SORTING------------------------------------------------

//let numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
//const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];


// function compareAscendingNumbers(n1, n2){
//     if (n1 < n2){
//         return -1;
//     } else if (n1 > n2){
//         return +1;
//     } else {
//         return 0;
//     }
// }

// function compareAscendingNumbers2(n1, n2){
//     return n1 - n2
// }

// function compareDescendingNumbers(n1, n2){
//     if (n1 < n2){
//         return +1;
//     } else if (n1 > n2){
//         return -1;
//     } else {
//         return 0;
//     }
// }

// function compareDescendingNumbers2(n1, n2){
//     return n2 - n1;
// }



// numbersArray.sort((n1, n2) => n1 - n2)

// console.log(numbersArray);


// stringsArray.sort((s1, s2) => s1.localeCompare(s2))

// console.log(stringsArray)

// const student1 = {
//     name: 'manuela',
//     yob: 1988,
//     marks: [10, 8, 7, 5]
// }

// const student2 = {
//     name: 'damiano',
//     yob: 1993,
//     marks: [9, 8, 7, 10]
// }

// const student3 = {
//     name: 'cesare',
//     yob: 2003,
//     marks: [7, 8, 7, 6]
// }

// const student4 = {
//     name: 'isabella',
//     yob: 1996,
//     marks: [10, 8, 9, 9]
// }

// const student5 = {
//     name: 'stefania',
//     yob: 1996,
//     marks: [9, 4, 7, 6]
// }

// const student6 = {
//     name: 'ares',
//     yob: 1993,
//     marks: [10, 10, 10, 10]
// }

// const student7 = {
//     name: 'stefania',
//     yob: 2000,
//     marks: [10, 10, 9, 10]
// }

// const student8 = {
//     name: 'cesare',
//     yob: 2003,
//     marks: [9, 9, 9, 9]
// }


// const students = [student1, student2, student3, student4, student5, student6, student7, student8];


// function compareStudentsByNameAscending(s1, s2){
//     return s1.name.localeCompare(s2.name);
// }

// function compareStudentsByYOBDescending(s1, s2){
//     return s2.yob - s1.yob;
// }

// function compareStudentsByNameAndYear(s1, s2){
//     if(s1.name.localeCompare(s2.name) === 0){
//         return s2.yob - s1.yob;
//     } else {
//         return s1.name.localeCompare(s2.name);
//     }
// }

// function calculateMean(arrayOfNumber){
//     const sumOfArray = arrayOfNumber.reduce((a, c) => a + c);
//     const mean = sumOfArray / arrayOfNumber.length;
//     return mean;
// }

// function compareByStudentMarksMeanDescending(s1, s2){
//     return calculateMean(s2.marks) - calculateMean(s1.marks);
// }

// function compareStudentsByNameYearAndMean(s1, s2){
//     if (s1.name.localeCompare(s2.name) === 0) {
//         if(s2.yob - s1.yob === 0){
//             return calculateMean(s2.marks) - calculateMean(s1.marks);
//         } else {
//             return s2.yob - s1.yob;
//         }
//     } else {
//         return s1.name.localeCompare(s2.name);
//     }
// }

// students.sort(compareStudentsByNameYearAndMean);

// console.log(students);

//FIND----------------------------------------------------

const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];


function isGreaterThan3Chars(element){
    if (element.length > 3) {
        return true;
    }
    return false;
}

console.log(stringsArray.filter(isGreaterThan3Chars));

console.log(stringsArray.find(isGreaterThan3Chars));

function containsCASA(element){
    if (element.includes('CASA')) {
        return true;
    }
    return false;
}

console.log(stringsArray.filter(containsCASA));

console.log(stringsArray.find(containsCASA));




//SOME----------------------------------------------------


function isGreaterThan30Chars(element){
    if (element.length > 30) {
        return true;
    }
    return false;
}

console.log(stringsArray.some(isGreaterThan3Chars));

console.log(stringsArray.some(isGreaterThan30Chars));