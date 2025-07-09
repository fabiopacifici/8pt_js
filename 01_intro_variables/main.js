// This is a comment

/*
this 
is
a 
comment
*/


//alert('Hello world')

document.writeln('Hello World')


/* document.getElementById('title').innerHTML = 'Hello World' */


// Data Types
// - strings: "Ciao"
// - numbers: 4


// Console log
console.log('Ciao');
console.log(10);

// reads the data type using typeof
console.log(typeof 20);
console.log(typeof "Ciao");

console.log(20 + 20);


// Variabili

const first_name = 'Fabio';
const firstName = 'Fabio';

console.log(firstName);


// Declare a variable
// Only declaration
let lastName;

// Declaration and initialization
let last_name = 'Pacific'

console.log(lastName);
console.log(last_name);


lastName = 'Rossi';
console.log(lastName);


// Const must be initialized
const job = 'teacher'
console.log(job);

// Uncaught SyntaxError: Missing initializer
//const hobby;

console.log('hi there ');


// Try to assign a constant
//firstName = 'Luigi' ❌

// let can be reassigned
last_name = 'Rossi' // ✅
console.log(last_name);


document.writeln(lastName)


// Declaration and use before it

console.log(movie); // ReferenceError: Cannot access 'movie' before initialization


var movie = 'Starwars'

const age = 40


/* 👇 Strings */


const full_name = 'Fabio' + ' ' + 'Paciaic'
console.log(full_name);


console.log('2' + 2); // 22


/* Multiline string with backticks */

console.log(`
  Ciao
  ciao
  ${firstName}
  ciao
  `);

  //
  console.log('Ciao ' + firstName);
  

  // 👇 Numbers

  const sum = 4 + 3

  console.log(sum);
  
  const result = sum / 2
  console.log(result);
  

  const multiply = sum * 10
  console.log(multiply);
  

  const subtraction = multiply - sum
  console.log(subtraction);
  

/* Access properties and methods of objects using the dot notation  */

console.log(20.343333.toFixed(2))


console.log(full_name.split(''));




/*

Objects 

// properties
- height: 172
- eye_color: light blue
- hair_color: brown


// methods
speack
walk


*/