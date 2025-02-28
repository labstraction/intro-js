// const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8];

// const sumAll = array1.reduce((previousValue, currentValue, currentIndex, array) => previousValue+=currentValue, 0);
// console.log(sumAll);

//1) filtrare tutti i numeri minori o uguali a zero (FILTER)
//2) convertire in gradi fahrenheit ipotizando che l'unita di partenza sia celsius (MAP)
//3) fare la media dei valori (REDUCE)
//4) restituire il valore più basso e il più alto (REDUCE)

//const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

//5) filtrare tutti i nomi piu grandi di 4 caratteri (FILTER)
//6) traformare tutte le stringe in maiuscolo (MAP)
//7) mettere SOLO le iniziali maiuscole (MAP)
//8) restiture una stringa composta dalle iniziale delle parole (REDUCE)
//9) sommare tutti i caratteri di tutte le stringhe (REDUCE)

// const sumOfAllStringsLength = array2.reduce((a,c) => a += c.length, 0);
// const sumOfAllStrings = array2.reduce((a,c) => a + c, '');

// console.log(sumOfAllStringsLength);
// console.log(sumOfAllStrings);

//10) eliminare le vocali dalle stringhe (MAP)
//11) restituire un array di numeri che sono le lunghezze delle singole parole (MAP)


// const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];

//12) restituire un array di numeri che sono le lunghezze dei sigoli array (MAP)
//13) sommare tutti i numeri in tutti gli array (REDUCE)
//14) sommare tutte le lunghezze degli array (REDUCE)
//15) sommare tutti i numeri con indice uguale e restituire un array di risultati (REDUCE)
// function reducingFunction(accoumulator, current){
//     const newAccumulator = [...accoumulator]
//     for (let j = 0; j < current.length; j++) {
//         const number = current[j];
//         if(newAccumulator[j]){
//             newAccumulator[j] += number;
//         } else {
//             newAccumulator[j] = number;
//         }
//     }
//     return newAccumulator;
// }


//const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];
// function sumAllEqualIndex(arrayOfArrays){
//     let accumulator = []
//     for (let i = 0; i < arrayOfArrays.length; i++) {
//         const current = arrayOfArrays[i];

//         accumulator = reducingFunction(accumulator, current)
//         // for (let j = 0; j < current.length; j++) {
//         //     const number = current[j];
//         //     if(accumulator[j]){
//         //         accumulator[j] += number;
//         //     } else {
//         //         accumulator[j] = number;
//         //     }
//         // }
//     }
//     return accumulator
// }                                           //4440       00000
// const sumAllEqualIndex2 = array3.reduce((accoumulator, current) => {

//     for (let j = 0; j < current.length; j++) {
//         const number = current[j];
//         if(accoumulator[j]){
//             accoumulator[j] += number;
//         } else {
//             accoumulator[j] = number;
//         }
//     }
//     return accoumulator;

// }, [])


// const sumAllEqualIndex3 = array3.reduce((accumulator, current) => {

//     const newAccumulator = current.map((nbr, i) => {
//         let newNumber = nbr;
//         if (accumulator[i]) {
//             newNumber += accumulator[i]
//         }
//         return newNumber;
//     })

//     return newAccumulator;
// }, [])



// console.log(sumAllEqualIndex(array3))

// console.log(sumAllEqualIndex2)

// console.log(sumAllEqualIndex3)


const lorenzo = {
    name: 'lorenzo',
    surname: 'puppo',
    yob: 1995,
    nationality: 'italy',
    gender: 'm',
    marks: [8, 9, 10],
}

const jan = {
    name: 'jan',
    surname: 'stigliani',
    yob: 2000,
    nationality: 'italy',
    gender: 'm',
    marks: [7, 7, 8],
}

const giovanni = {
    name: 'giovanni',
    surname: 'sussarellu',
    yob: 1981,
    nationality: 'italy',
    gender: 'm',
    marks: [7, 6, 8]
}

const sara = {
    name: 'sara',
    surname: 'de prà',
    yob: 1989,
    nationality: 'italy',
    gender: 'fluid',
    marks: [9, 6, 8]
}

const jeremias = {
    name: 'jeremias',
    surname: 'cedeno',
    yob: 2003,
    nationality: 'ecuador',
    gender: 'm',
    marks: [6, 10, 7]
}

const laura = {
    name: 'laura',
    surname: 'mazza',
    yob: 1984,
    nationality: 'italy',
    gender: 'f',
    marks: [4, 2, 6]
}

const eusebio = {
    name: 'eusebio',
    surname: 'veizi',
    yob: 1993,
    nationality: 'albanese',
    gender: 'peanut',
    marks: [5, 7, 6]
}

const hugo = {
    name: 'hugo',
    surname: 'martinez',
    yob: 1994,
    nationality: 'elSalvador',
    gender: 'f',
    marks: [10, 10, 8]
}

const hugo2 = {
    name: 'hugo',
    surname: 'evil',
    yob: 1994,
    nationality: 'elSalvador',
    gender: 'f',
    marks: [10, 10, 8]
}


const laura2 = {
    name: 'laura',
    surname: 'old',
    yob: 1920,
    nationality: 'italy',
    gender: 'f',
    marks: [4, 2, 6]
}

const allStudents = [lorenzo, jan, giovanni, sara, jeremias, laura, eusebio, hugo, hugo2, laura2]




// function sortByAge(student1, student2){
//     const yob1 = student1.yob;
//     const yob2 = student2.yob;

//     return yob1 - yob2;
// }

// function sortByAgeAndSurname(student1, student2){
//     const yob1 = student1.yob;
//     const yob2 = student2.yob;

//     if(yob1 === yob2){
//         const surname1 = student1.surname;
//         const surname2 = student2.surname;
//         return surname1.localeCompare(surname2)
//     }

//     return yob1 - yob2;
// }

// allStudents.sort(sortByAgeAndSurname)


//1) mettere in ordine gli studenti per nome e in caso di omonimia usare
//  come ordine aggiuntivo l'età crescente

console.log(allStudents);

//2) mettere in ordine gli studenti per media dei voti

function sortByMean(student1, student2){
    const mean1 = calculateMean(student1.marks);
    const mean2 = calculateMean(student2.marks);

    return mean1 - mean2;
}