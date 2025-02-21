const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8];

//1) filtrare tutti i numeri minori o uguali a zero
//2) convertire in gradi fahrenheit ipotizando che l'unita di partenza sia celsius

function celsiusToFar(arrayOfNumbers) {
    const newArray = []
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        const fahrenheitElement = (element * 9/5) + 32;
        newArray.push(fahrenheitElement);
    }
    return newArray

}

const farArray = celsiusToFar(array1);
console.log(farArray);

//3) fare la media dei valori

function creaMedia(numbers) {
    let media = 0
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        media = media + element;
        
    }
    media = media / numbers.length
    return media;
    
}
const media = creaMedia(array1)
console.log(media);


//4) restituire il valore più basso e il più alto

function minAndMaxValue(arrayOfNumbers) {

    const minMax = [arrayOfNumbers[0], arrayOfNumbers[0]]

    for (let i = 1; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];

        if (element < minMax[0]) {
           minMax[0] = element
        } else if(element > minMax[1]) {
            minMax[1] = element
        }

    }
    return minMax
}

const minAndMax = minAndMaxValue(array1)
console.log(minAndMax)

//LAURA VERSION

function findMinMax(arrayOfNumbers) {
    let min = null;
    let max = null;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        
        if (min === null || element < min) {
            min = element;
        }

        if (max === null || element > max) {
            max = element;
        }
    }

    return [min, max]
}

const lauraAndMax = findMinMax(array1)
console.log(lauraAndMax)





const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

//5) filtrare tutti i nomi piu grandi di 4 caratteri

function filterSmallNames(arrayOfNames) {
    let greaters = [];
    for (let i = 0; i < arrayOfNames.length; i++) {
        const element = arrayOfNames[i];

        if (element.length > 4) {
            greaters.push(element)
        }
        
    }
    return greaters
}

const superNames = filterSmallNames(array2)

console.log(superNames)

//6) traformare tutte le stringe in maiuscolo

function arraytoUpper(stringArray) {
    const newArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        const element = stringArray[i];
        const upperString = element.toUpperCase() // toUpperCase(elemnt)
        newArray.push(upperString) // push(newArray, emptyString)
    }
    return newArray;
}

const uArray = arraytoUpper(array2);

console.log('es 6',uArray);


//7) mettere SOLO le iniziali maiuscole

function initialsUpper(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {

        const elementString = array[i];

        let newString = elementString[0].toUpperCase() + elementString.slice(1);

        newArray.push(newString);

    }

    return newArray;
}

const arrayp = initialsUpper(array2)
console.log('es 7',arrayp);

//8) restiture una stringa composta dalle iniziale delle parole

function firstLetterString(arrayOfStrings) {

    let finalString = "";

    for (let i = 0; i < arrayOfStrings.length; i++) {
        const element = arrayOfStrings[i];
        const firstChar = element[0];
        finalString += firstChar;
    }

    return finalString;
}

const stringFirstLetters = firstLetterString(array2);
console.log("stringa composta da prime lettere", stringFirstLetters);


///SARA VERSION

function allInitialsToString(arrayOfStrings) {

    let finalString = "";

    for (let i = 0; i < arrayOfStrings.length; i++) {
        finalString += (arrayOfStrings[i])[0]
    }

    return finalString;
}

const stringona = allInitialsToString(array2);
console.log("stringa composta da prime lettere fatta da sara:", stringona);




//9) contare tutti i caratteri di tutte le stringhe


//10) eliminare le vocali dalle stringhe
function removeVowels(arrayString){

    const vowels="aeiou";
    let newStringWithoutVowels=[];
    for (let i = 0; i < arrayString.length; i++) {

        let element = arrayString[i];
        let elementWithoutVowels = "";

        for (let j = 0; j < element.length; j++) {

            if(!vowels.includes(element[j].toLowerCase())){
                elementWithoutVowels+=element[j];
            }
        } 
        newStringWithoutVowels.push(elementWithoutVowels); 
    }
    return newStringWithoutVowels;
}

const stringWithoutVowels = removeVowels(array2)
console.log('restituisco le stringhe senza vocali:', stringWithoutVowels)
//11) restituire un array di numeri che sono le lunghezze delle singole parole


const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];

//12) restituire un array di numeri che sono le lunghezze dei sigoli array
//13) sommare tutti i numeri in tutti gli array
const summAllNumbers = arrayToReduce => {

    let accumulator = 0;

    for (const singleArray of arrayToReduce) {
        for (const number of singleArray) {
            accumulator += number;
        }
    }

    // for (let i = 0; i < arrayToReduce.length; i++) {
    //     const arrayElement = arrayToReduce[i];
    //     for (let j = 0; j < arrayElement.length; j++) {
    //         const number = arrayElement[j];
    //         accumulator = accumulator + number;
    //     }
    // }

    return accumulator;
}

const resultSumAllNumbers = summAllNumbers(array3)
console.log('il resultato della somma è:', resultSumAllNumbers)

//14) sommare tutte le lunghezze degli array
//15) sommare tutti i numeri con indice uguale e restituire un array di risultati