console.log('hi');


/* 
pari o dispari: 
- chiedere all'utente se vuole pari o dispari 
- e un numero intero compreso tra 1 e 9. 
- Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 

Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.


// Tools:
- const/let 
- prompt
- Math.random/Math.floor
- modulus operator %
- if/else


*/

// #preparation
// ask the user to choose pari o dispari and save the result ionto a variable
const userChoise = prompt('scegli pari o dispari').toLowerCase();
console.log(userChoise);

// ask the user a number vbetween 1 and 9 and save the result into a variable
const userNumber = Number(prompt('Inserisci un numero tra 1 e 9'));

console.log(userNumber);

// generate a radom number using Math.random 
const pcNumber = Math.floor(Math.random() * 9) + 1;
console.log(pcNumber);


// # Elaboration
// sum the two numbers 
const sum = userNumber + pcNumber
console.log(sum);

// if the number is even store even in a variable
// otherwise store odd
console.log(sum % 2);
console.log(sum % 2 === 0);

let result = ''
if(sum % 2 === 0) {
  const myVariable = 'Fabio'
  
  result = 'pari'
} else {
  result = 'dispari'
}

//console.log(myVariable);

console.log(result);


let winner = ''
if(userChoise === result){
  winner = 'You win'
} else {
  winner = 'PC wins'
}
// #output
// declare the winner based on the results

console.log(winner);


/* Variable Scope */


let validation = true;
const wordA = "Word A";
let wordB = "Word B";

if (validation === true) {
  let wordC = "Word C";
  let wordB = "Word Custom B";
  console.log(wordA);
  console.log(wordB);
  console.log(wordC);
}

console.log(wordA);
console.log(wordB);
console.log(wordC); 
