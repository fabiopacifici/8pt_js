// 🌐 Global scope (ambito di visibilita' globale)
console.log('Functions are ready to be deployed!');


// 👉 Function Declaration
/* 
- keyword: function
- function name: myFunctionName
- parenthesis: (params) 
- code bloc: { // your code here }


function greetings(){
  // your code goes here 
}


*/

// Function declaration without parameters
function logGreeting(){
  console.log('Hi there');
}

//logGreeting()


// Function declaration with params
// This function wants a `parameter called userName` 
function printGreeting(userName) {
  document.writeln(`Hi ${userName}` );
}
// When you call the function you pass the argument
printGreeting('Luca')

// Function with return
function sumNumbers(numb_one, numb_two) {
  // 👁️ Function Scope (local scope)
  const result = numb_one + numb_two

  //console.log(result);
  return result
    
}
//console.log(result); //  ❌ reference error result not defined

const result = sumNumbers(20, 40) // 60

console.log(result);



function sumNumbs(numb_1, numb_2, numb_3){
  return numb_1 + numb_2 +  numb_3
}

console.log(sumNumbs(1, 5, 6));


/*

pari o dispari: 
scrivere una funzione per verificare se un numero è pari o dispari, 
quindi chiedere un numero all'utente 
e comunicargli se è pari o dispari

// Function names:
// evenOrOdd
// pariDispari
// isEven
// isOdd

// parameter:
// - numb

// Tools:
- if
- prompt

*/



//quindi chiedere un numero all'utente 
//const userNumb = prompt('Type a number and i\'ll tell you if it is even or odd')
const userNumb = 15

/* // verificare se un numero è pari o dispari
let isEven 
if(userNumb % 2 === 0){
  //console.log('The number is even');
  isEven = true
} else {
  //console.log('The number is odd');
  isEven = false
}
 */

/* 

scrivere una funzione per verificare se un numero è pari o dispari*/

function isEven(numb) {
  // verificare se un numero è pari o dispari
  let isEven
  if (numb % 2 === 0) {
    //console.log('The number is even');
    isEven = true
  } else {
    //console.log('The number is odd');
    isEven = false
  }

  return isEven
}


const even = isEven(userNumb)
console.log(even);



//comunicargli se è pari o dispari

if (even){
  console.log('The number is even');

} else {
  console.log('The number is odd');

}



// 10k loc



console.log(isEven(33));




// Reverse string


const word = 'Fabio'
const reversedWord = reverse(word) // oibaF
console.log(reversedWord);


/* let reversedWord = ''
for(let i = word.length - 1; i >= 0; i--){
  const thisCharacter = word[i]
  reversedWord = reversedWord + thisCharacter 
}

console.log(reversedWord); */


function reverse(word){
  let reversedWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    const thisCharacter = word[i]
    reversedWord = reversedWord + thisCharacter
  }

  //console.log(reversedWord);
  return reversedWord;
}


// 




function saluta(user){
  
  console.log(`Hi ${user}`);
  
}


const user = 'Fabio'
saluta(user)

saluta('Nicola')





