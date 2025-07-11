console.log('Array');


// 👉 Array
const numb = 12
const name = 'Fabio'
const is_working = true


const movie_1 = 'Matrix'
const movie_2 = 'Il signore degli anelli'
const movie_3 = 'Starwars'



/* 
- comprare pane
- comprare acqua
- comprare il vino

*/
// Create an empty array
//const movies = []

const movies = ['Matrix', 'Il signore degli anelli', 'Starwars']
console.log(movies);
console.log(movies.length);



// Read array's element
console.log(movies[0]); //'Matrix'
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]);

let myVar
console.log(myVar);


// Array Methods

// Add an element at the end of the array
movies.push('Lucifer', 'Matrix 2')
console.log(movies);
console.log(movies[3]);


// add an element at the beginning
movies.unshift('Ferro 3')


// Remove the last element of the array
console.log(movies.pop())
console.log(movies);

// Remove the first element of the array
movies.shift()
console.log(movies);


// For Loop and Array

// Tutti gli elementi dell'array hanno un indice numerico che parte da zero
// Per vedere la lunghezza di  un array usiamo `.length`

// Per usare un ciclo for:
// 1. Un punto di partenza per il contatore
// 2. Un punto di arrivo



for(let index = 0; index < movies.length; index++){

  const thisMovie = movies[index] 
  console.log(thisMovie);
  
}


/* 
movies.length = 4

i = 0 -> 0 < 4 -> movies[0] -> Matrix -> i++ (i = 1)
i = 1 -> 1 < 4 -> movies[1] -> Il sign dexgli anelli -> i++ (i = 2)
i = 2 -> 2 < 4 -> movies[2] -> the other movie -> i++ (i = 3)
i = 3 -> 3 < 4 -> movies[3] -> the other other movie -> i++ (i = 4)
i=5 -> 4< 4 false.


console.log(movies[0]); //'Matrix'
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]);


*/


/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers);

// read
const firstNumber = numbers[0]
console.log(firstNumber)


for(let i = 0; i < numbers.length; i++){

  const thisNumber = numbers[i]

  console.log(thisNumber);

  if(thisNumber  % 2 === 0) {
    console.log(`The number ${thisNumber} is even`);
  } else {
    console.log(`The number ${thisNumber} is odd`);
  }

} */



// Snacks

const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur']
const names = []
const numbers = [1, 2, 3]
const colours = ['Red', 'Blue', 'Yellow']
const keys = ['q', 'w', 'e', 'r', 't', 'y']
const countries = ['Bolivia', 'Jordan', 'Greenland']
const fruits = ['Apple', 'Orange', 'Pear']




// 1. Aggiungi Fred all'array names
//names.push('Fred')
names.unshift('Fred')
console.log(names);

// 2. Aggiungi 4 alla fine dell'array numbers
numbers.push(4)
console.log(numbers);



// 3. Aggiungi Rio all'inizio dell'array cities
cities.unshift('Rio')
// 4. Stampa in console tutte le citta

for(let i = 0; i < cities.length; i++){
  // recupero l'elemento dall'array in ciascuna iterazione
  const thisCity = cities[i] // 
  console.log(thisCity); // 'London' ...
  
}


for(let index = 0; index < fruits.length; index++){
  const thisFruit = fruits[index]
  console.log(thisFruit);
  document.writeln(thisFruit) 
}




const otherCities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur']

const firstElement = otherCities[0]

console.log(firstElement);

// push adds at the end of the array the given element/s
otherCities.push('Roma')

console.log(otherCities);


// remove the last element 
otherCities.pop()
console.log(otherCities);


// add the beginning of the array
otherCities.unshift('Norwich')
console.log(otherCities);

// remove from the beginning
otherCities.shift()
console.log(otherCities);

// 