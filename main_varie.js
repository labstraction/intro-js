console.log('looooog');

// //SCOPE---------------------------------------------------

// //scope globale è dichiarato fuori da qualsiasi graffa.

// let pippo = 10;  // scope globale

// if(pippo < 20){

//     pippo = pippo + 3;
//     let pluto = 4;

// }

// //pluto = pluto + 1;
// console.log(pippo);
// //console.log(pluto);


// //SCOPE NESTATI-------------------------

// const i = 'sono la i più antica';

// function createEvenArray(max){

//     const tempArray = [];
//     const i = 40;

//     for (let i = 0; i <= max; i++) {
        
//         if (i % 2 === 0) {
//             tempArray.push(i);
//         }
        
//     }

//     return tempArray;
// }


// console.log(createEvenArray(1000))


// for (let i = 0; i < 10; i++) {
    
//     for (let i = 0; i < 20; i++) {
        
//         for (let i = 0; i < 30; i++) {
            
//             console.log(i);
            
//         }
        
//     }
    
// }


// //FUNZIONE PARAMETRI ARGS-------------------


// function mean() {

//     // console.log(arguments)
    
//     // const sum = v1 + v2 + v3;

//     // const mean = sum / 3;

//     // return mean;

//     let sum = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         const value = arguments[i];
//         sum = sum + value;
//     }

//     const mean = sum/arguments.length;

//     return mean;

// }

// console.log(mean(3,4,5))


// function sumAll(...args){
//     let sum = 0;

//     for (let i = 0; i < args.length; i++) {
//         const value = args[i];
//         sum = sum + value;
//     }

//     return sum;
// }

// console.log(sumAll(3,4,5))


// function pippo(v1, v2, ...args) {
//     console.log('arguments', arguments);
//     console.log('v1', v1);
//     console.log('v2', v2);
//     console.log('args', args);
// }

// pippo(2,4,6,8,0);


//REDUCE----------------------------------

// function sumAllArray(arrayToSum){

//     let accumulator = 0;

//     for (let i = 0; i < arrayToSum.length; i++) {
//         const current = arrayToSum[i];
        
//         // put your code here
//         accumulator = accumulator + current;

//     }

//     return accumulator;
// }

// console.log('sumAllArray', sumAllArray([2,3,4,5]));

// function multiplyAllArray(arrayToMultiply){

//     let accumulator = 1;

//     for (let i = 0; i < arrayToMultiply.length; i++) {
//         const current = arrayToMultiply[i];
        
//         // put your code here
//         accumulator = accumulator * current;

//     }

//     return accumulator;
// }

// console.log('multiplyAllArray', multiplyAllArray([2,3,4,5]));


// function join(arrayToJoin){

//     let accumulator = '';

//     for (let i = 0; i < arrayToJoin.length; i++) {
//         const current = arrayToJoin[i];
        
//         // put your code here
//         accumulator += current; 

//     }

//     return accumulator;
// }

// console.log('join', join(['qui', 'quo', 'qua']));


// function sumEvenAndOdd(arrayToReduce){

//     let accumulator = {sumOfEven: 0, sumOfOdd: 0};

//     for (let i = 0; i < arrayToReduce.length; i++) {
//         const current = arrayToReduce[i];
        
//         // put your code here
//         if (current % 2 === 0) {
//             accumulator.sumOfEven += current;
//         } else {
//             accumulator.sumOfOdd += current;
//         }

//     }

//     return accumulator;
// }

// console.log('sumEvenAndOdd', sumEvenAndOdd([1,2,3,4,5,6]));


// RICORSIONE---------------------------------------------

// FATTORIALE(!)

// 5! = 5 * 4 * 3 * 2 * 1 = 120!

//DEFINIZIONE
// 1) 1! = 1;
// 2) n! = n * (n - 1)!

// 5! = 5 * 4!
//          4 * 3!
//              3 * 2!
//                  2 * 1!
//                      1  

// function fattoriale(n){
    
//     if(n === 1){
//         //1)
//         return 1;
//     } else {
//         //2)
//         return n * fattoriale(n - 1);
//     }
// }

// console.log(fattoriale(5));


function min(v1, v2) {
    let minimun;
    if (v1 < v2) {
      minimun = v1;  
    } else {
      minimun = v2;
    }
    return minimun;
}

console.log('min test',min(3, 8)===3);
console.log('min test',min(13, 8)===8);


function min2(...args){

    let accumulator = -Infinity;

    for (let i = 0; i < args.length; i++) {
        const current = args[i];
        
        if (i===0) {
            accumulator = current;
        } else if (accumulator > current){
            accumulator = current;
        }

    }

    return accumulator;
}

console.log('min2', min2());
console.log('min2', min2(2));
console.log('min2', min2(3, 2, -5 , 8));


//1) isEven(0) => true
//2) isEven(1) => false
//3) isEven(n) => isEven(n-2)


// function isEven(n){
//     if(n===0){
//         return true;
//     } else if (n === 1){
//         return false;
//     } else {
//         return isEven(n - 2);
//     }  
// }

// console.log('isEven(3)', isEven(3));
// console.log('isEven(6)', isEven(6));
