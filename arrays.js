// const pippo = 12

// const array1 = ["ciao", 23, 23.12, true, [], ['mondo'], pippo];// è possibile ma non raccomandabile!

// console.log(array1)

// const array2 = []

// array2.push(4);
// array2.push(8);

// console.log('array2 push',array2);

// const removed = array2.pop()

// console.log('array2 pop',array2, removed);

// array2.unshift(12);
// array2.unshift(11);

// console.log('array2 unshift',array2);

// const removed2 = array2.shift()

// console.log('array2 shift',array2, removed2);


// console.log('get array second element', array2[1]);

// array2[1] = 27;

// console.log('change array second element', array2);


// const array3 = [123, 12, 45, 34, 1, 2, 45, 34];

// for (let i = 0; i < array3.length; i++) {
//     const element = array3[i];
//     console.log(`l'elemento a indice ${i} è ${element}`)
// }

// for (const element of array3) {
//     console.log(element)
// }


// const array4 = [1000, 1001];


// const array5 = array3.concat(array4);

// console.log('concat', array5);

// const array6 = array5.slice(2, -2);

// console.log('slice', array5,  array6);

// const removedElements = array5.splice(1, 3)

// console.log('splice', array5, removedElements);

// array5.sort();

// console.log('sort', array5);

// const index = array5.indexOf(1000)

// console.log('1000 è a indice ', index)

// const array7 = [2, 4, 1, 33, 56, 78, 12, 5, 6, 7, 4]


//mapping

// function doubleArrayElements(arrayOfNumbers) {

//     const newArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];

//         const double = element * 2; // eseguo la trasformazione

//         newArray.push(double);
//     }
    
//     return newArray
// }

// const array8 = doubleArrayElements(array7);

// console.log('map', array8)


// function adOneToArrayElements(arrayOfNumbers){

//     const newArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];

//         const modifiedElement = element + 1;

//         newArray.push(modifiedElement)
        
//     }

//     return newArray;

// }

// const array9 = adOneToArrayElements(array7);

// console.log('map', array9)


//filtering


// function removeLargerThan30(arrayOfNumbers){

//     const newArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];

//         if(element <= 30){
//             newArray.push(element)
//         }
//     }
//     return newArray;
// }

// const array10 = removeLargerThan30(array7);

// console.log('filter', array10)



// function keepEvenElements(arrayOfNumbers){

//     const newArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];

//         if(element % 2 === 0){
//             newArray.push(element)
//         }
//     }
//     return newArray;
// }

// const array11 = keepEvenElements(array7);

// console.log('filter', array11)


//reducing



// function sumAllElements(arrayOfNumbers){

//     let accumulator = 0;

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];

//         accumulator = accumulator + element;

//     }

//     return accumulator;
    
// }

// const array12 = sumAllElements(array7);

// console.log('reduce', array12);


// function multiplyAllElements(arrayOfNumbers){

//     let accumulator = 1;

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];

//         accumulator = accumulator * element;

//     }

//     return accumulator;
    
// }

// const array13 = multiplyAllElements(array7);

// console.log('reduce', array13);


// function sumAllOddElements(arrayOfNumbers){

//     let accumulator = 0;

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];

//         if(element % 2 !== 0){
//             accumulator = accumulator + element;
//         }

//     }

//     return accumulator;
    
// }

// const array14 = sumAllOddElements(array7);

// console.log('reduce', array14);



// function sumAllEvenElements(arrayOfNumbers){
//     return sumAllElements(keepEvenElements(arrayOfNumbers))
// }

// const array15 = sumAllEvenElements(array7);

// const array15 = sumAllElements(keepEvenElements(array7))

// console.log('functions concatenation', array15);


// function sumEvenAndSumOdd(arrayOfNumbers){
//     let accumulatorEven = 0;
//     let accumulatorOdd = 0;

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];

//         if(element % 2 === 0){
//             accumulatorEven = accumulatorEven + element;
//         } else {
//             accumulatorOdd = accumulatorOdd + element;
//         }
//     }
//     return [accumulatorEven, accumulatorOdd];
// }

// const array16 = sumEvenAndSumOdd(array7);

// console.log('reduce', array16);


// function sumEvenAndSumOdd(arrayOfNumbers){

//     let accumulator = [0, 0] //sumOfEven, sumOfOdd

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];

//         if(element % 2 === 0){
//             accumulator[0] = accumulator[0] + element;
//         } else {
//             accumulator[1] = accumulator[1] + element;
//         }
//     }
//     return accumulator;
// }

// const array16 = sumEvenAndSumOdd(array7);

// console.log('reduce', array16);

const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];

function navigateArray(array){

    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        for (let j = 0; j < arrayElement.length; j++) {
            const element = arrayElement[j];
            console.log(`l'elemento ${element} è in posizione ${i}, ${j}`)
        }
        
    }
}

console.log(array3)
navigateArray(array3);


/////////////////intervallo


// let number1 = 27;

// function stupidFunction(number) {
//     number = number * 2
// }

// stupidFunction(number1);

// console.log(number1);


// let array1 = [27];

// function stupidFunction2(array){
//     array[0] = array[0] * 2
// }

// function lessStupidFunction(array){
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         newArray.push(element);
//     }

//     newArray[0] = newArray[0] * 2;

//     return newArray;
// }

// stupidFunction2(array1);

// array1 = lessStupidFunction(array1)

// console.log(array1)