//1) create un oggetto studente per ogni partecipante al corso
// l'oggetto dovrà avere le seguenti keys: name, surname, gender, marks, yob, nationality
// mettete tutti gli oggetti dentro un array

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

const allStudents = [lorenzo, jan, giovanni, sara, jeremias, laura, eusebio, hugo]

// 2) scrivete una funzione che restituisca l'età media degli studenti

function averageAge(arrayOfStudents) {

    const actualYear = 2025;
    let totalAge = 0;

    for (let i = 0; i < arrayOfStudents.length; i++) {
        const student = arrayOfStudents[i];
        const age = actualYear - student.yob;
        totalAge = totalAge + age;
    }

    // for (const element of arrayOfStudents) {
    //     const age = actualYear - element.yob;
    //     totalAge = totalAge + age;
    // }

    // arrayOfStudents.forEach(student => {
    //     const age = actualYear - student.yob;
    //     totalAge = totalAge + age;
    // });

    const average = totalAge / arrayOfStudents.length;
    return average
}

const av = averageAge(allStudents);
console.log(av);


// 3) scrivete una funzione che restituisca un array di stringhe
//    ogni stringa dovrà avere questo formato "nome/cognome"

function fromArrayOfStudentsToArrayOfNames(arrayOfStudents) {
    let arrayOfNames = []

    arrayOfStudents.forEach(student => {
        const name = student.name + "/" + student.surname
        arrayOfNames.push(name)
    });
    return arrayOfNames
}
const names = fromArrayOfStudentsToArrayOfNames(allStudents)
console.log(names)

// 4) scrivete una funzione che restituisca la somma dei maschi e delle femmine

function countMalesAndFemales(arrayOfStudents) {
    //let counters = [0,0,0] // male, female, others
    const counters = {
        maleCounter: 0,
        femaleCounter: 0,
        otherCounter: 0
    }

    for (let i = 0; i < arrayOfStudents.length; i++) {
        const student = arrayOfStudents[i];
        if(student.gender === "m"){
            // counters[0]++;
            counters.maleCounter++
        } else if(student.gender === "f"){
            // counters[1]++;
            counters.femaleCounter++
        } else{
            // counters[2]++;
            counters.otherCounter++
        }
    }
    return counters;
}

const counters = countMalesAndFemales(allStudents);
console.log(counters);


// 5) scrivete una funzione che restituisca la media delle medie degli studenti

function meanOfMeans(arrayOfStudents) {
    
    let sumOfAverages = 0

    for (let i = 0; i < arrayOfStudents.length; i++) {
        const student = arrayOfStudents[i];
        const marksArray = student.marks;
        let sumOfMarks = 0;
        for (let i = 0; i < marksArray.length; i++) {
            const mark = marksArray[i];
            sumOfMarks += mark;
        }
        const averageMark = sumOfMarks/marksArray.length;
        sumOfAverages += averageMark;
    }

    const averageOfAverages = sumOfAverages/arrayOfStudents.length
    return averageOfAverages
}

const averages = meanOfMeans(allStudents)
console.log(averages);



/////////////////////////


function calculateMean(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const number = arrayOfNumbers[i];
        sum = sum + number;
    }
    const mean = sum / arrayOfNumbers.length;
    return mean;
}

function meanOfMeans2(arrayOfStudents) {
    let sumOfAverages = 0

    for (let i = 0; i < arrayOfStudents.length; i++) {
        const student = arrayOfStudents[i];
        const averageMark = calculateMean(student.marks)
        sumOfAverages += averageMark;
    }
    const averageOfAverages = sumOfAverages/arrayOfStudents.length
    return averageOfAverages
}

const averages2 = meanOfMeans2(allStudents)
console.log(averages2);

function meanOfMeans3(arrayOfStudents) {
    const arrayOfMeans = [];
    
    for (const student of arrayOfStudents) {
        const mean = calculateMean(student.marks);
        arrayOfMeans.push(mean);
    }

    const superMean = calculateMean(arrayOfMeans);
    return superMean;
}

const averages3 = meanOfMeans3(allStudents)
console.log(averages3);


// 6) scrivete una funzione che restituisca un oggetto cosi strutturato
// {nationality1:[student1Name, student2Name...], nationality2:[student1Name, student2Name...]....}

const countStudentsNationalities = arrayOfStudents => {
    
    const studentsNationalities = {}

    for (const student of arrayOfStudents) {

        const nationality = student.nationality

        if (studentsNationalities[nationality]) {
            studentsNationalities[nationality]++
        } else {
            studentsNationalities[nationality] = 1
        }
    }
    return studentsNationalities
}

const studentsNationalities = countStudentsNationalities(allStudents)
console.log('le nazionalità degli studenti sono: ', studentsNationalities)

//////////////////////////////////

const countStudentsNationalities2 = arrayOfStudents => {
    
    const studentsNationalities = {}

    for (const student of arrayOfStudents) {

        const nationality = student.nationality

        if (studentsNationalities[nationality]) {
            studentsNationalities[nationality].push(student.name);
        } else {
            studentsNationalities[nationality] = [];
            studentsNationalities[nationality].push(student.name);
        }
    }
    return studentsNationalities
}

const studentsNationalities2 = countStudentsNationalities2(allStudents)
console.log('le nazionalità degli studenti sono: ', studentsNationalities2)

////////////////////////////////////////

const countStudentsNationalities3 = arrayOfStudents => {
    
    const studentsNationalities = {}

    for (const student of arrayOfStudents) {
        const nationality = student.nationality
        if (!studentsNationalities[nationality]) {
            studentsNationalities[nationality] = [];
        }
        studentsNationalities[nationality].push(student.name)
    }
    return studentsNationalities
}

const studentsNationalities3 = countStudentsNationalities3(allStudents)
console.log('le nazionalità degli studenti sono: ', studentsNationalities3)



// 7) https://jessbayer.com/



// function empowerStudents(arrayOfStudents){
//     for (const student of arrayOfStudents) {
//         student.mean = () => {
//             return calculateMean(student.marks);
//         }
//     }
// }

// empowerStudents(allStudents);

// console.log(allStudents[0].mean())