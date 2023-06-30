/// scrivere una funzione che dato un array di numeri
/// li eleva al quadrato e rimuove i negativi;

// const testArray = [2, -12, 0, 27, 4, -3, 12, 1, -1];

// function squareAllAndRemoveNegatives(arr){
//     const onlyPositiveArray = arr.filter( el => el >= 0);
//     //console.log("🚀 ~ squareAllAndRemoveNegatives ~ filteredArray:", filteredArray);
//     const squaredArray = onlyPositiveArray.map( el => el ** 2 );
//     //console.log("🚀 ~ squareAllAndRemoveNegatives ~ mappedArray:", mappedArray)
//     return squaredArray;
// }

// function squareAllAndRemoveNegatives2(arr){
//     return arr.filter( el => el >= 0 )
//               .map( el => el ** 2 );
// }


// function squareAllAndRemoveNegatives3(arr){
    
//     const accumulator = [];

//     for (const number of arr) {
        
//         if ( number >= 0) {
//           const newNumber = number ** 2
//           accumulator.push(newNumber);  
//         }

//     }

//     return accumulator;
// }

// function squareAllAndRemoveNegatives4(arr){
    
//     return arr.reduce((acc, curr)=> {
//         if ( curr >= 0) {
//             const newNumber = curr ** 2
//             acc.push(newNumber);
//             return acc;
//         }
//         return acc;
//     }, []);

//     //return arr.reduce((a, c) => c >= 0 ? [...a, c ** 2] : a, []);
// }

// console.log(squareAllAndRemoveNegatives4(testArray));


// // scrivi una funzione che dato un array di numeri
// // somma tutti quelli divisibili per 3;

// function sumAllDivisibleByThree(arr) {

//     const divisibleBy3Array = arr.filter(el => el % 3 === 0);
//     const sum = divisibleBy3Array.reduce((acc, curr) => acc + curr, 0);

//     return sum;
    
// }

// function sumAllDivisibleByThree1(arr) {
//     return arr.filter( el => el % 3 === 0 )
//               .reduce((acc, curr) => acc + curr, 0)
// }

// function sumAllDivisibleByThree2(arr){
    
//     let accumulator = 0;

//     for (const number of arr) {
        
//         if( number % 3 === 0 ){
//             accumulator = accumulator + number;
//         }

//     }

//     return accumulator;
// }

// function sumAllDivisibleByThree4(arr){
    
//     return arr.reduce((acc, curr) => {
//         if( curr % 3 === 0 ){
//             acc = acc + curr;
//         }
//         return acc;
//     }, 0);

// }


// console.log(sumAllDivisibleByThree4(testArray));


// data una stringa di elementi separati da virgole
// convertire gli elementi in numeri,
// togliere quelli che non sono numeri
// e sommare i numeri tra loro

// const testString = '2000,10,pippo,345,-234,ciambella,2,,'

// function convertToNumbersAndSumAll(str){
//     const stringArray = str.split(',');
//     console.log("🚀 ~ convertToNumbersAndSumAll ~ stringArray:", stringArray);
//     const numbersArray = stringArray.map(el => parseFloat(el));
//     console.log("🚀 ~ convertToNumbersAndSumAll ~ numbersArray:", numbersArray)

//     function isANumber(element){
//         if (isNaN(element)) {
//             return false;
//         } else {
//             return true;
//         }
//     }

//     const onlyNumbersArray = numbersArray.filter(isANumber);
//     // const onlyNumbersArray = numbersArray.filter(el => {
//     //     if (isNaN(el)) {
//     //         return false;
//     //     } else {
//     //         return true;
//     //     }
//     // })
//     //const onlyNumbersArray = numbersArray.filter(el => !isNaN(el));
//     console.log("🚀 ~ convertToNumbersAndSumAll ~ onlyNumbersArray:", onlyNumbersArray);

//     const sum = onlyNumbersArray.reduce((acc, curr) => acc + curr, 0);

//     return sum;
    
// }


// function convertToNumbersAndSumAll2(str){
//     return str.split(',')
//               .map(el => parseFloat(el))
//               .filter(el => !isNaN(el))
//               .reduce((acc, curr) => acc + curr, 0);
// }


// function convertToNumbersAndSumAll3(str){

//     const stringArray = str.split(',')
    
//     let accumulator = 0;

//     for (const str of stringArray) {
        
//         const number = parseFloat(str);
//         if (!isNaN(number)) {
//             accumulator = accumulator + number;
//         }


//     }

//     return accumulator;
// }

// function convertToNumbersAndSumAll4(str){

//     return str.split(',').reduce((acc, curr) => {
//         const number = parseFloat(curr);
//         if (!isNaN(number)) {
//             acc = acc + number;
//         }
//         return acc;
//     },0);

//     // return str.split(',')
//     //           .reduce((a, c) => !isNaN(parseFloat(c)) ? a + parseFloat(c) : a, 0);
// }


// console.log(convertToNumbersAndSumAll4(testString));



//1)  Dato un array di stringhe, 
//   eliminare tutte quelle che non contengono la lettera p
//   e ritornare la somma delle lunghezze delle rimanenti

const test1 = ['pippo', 'pluto', 'qui', 'quo', 'qua', 'paperone'];

//2) Dato un array di numeri, moltiplicarli per il loro indice
//   rimuovere quelli maggiori di 1000
//   e restituirli in formato stringa, separati da punto e virgola

const test2 = [100, 10, 24, -20, 300, 6, 100, 300];

//3) Data una stringa, eliminare tutte le parole più corte di 4 caratteri
//   e restituirle in un array ordinate per lunghezza dalla più lunga

const test3 = 'ho fatto il bucato ieri sera ma si è colorato tutto di violetto';