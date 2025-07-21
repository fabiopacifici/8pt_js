console.log('hi');

/* Function declaration without params */


logMessage() // this is a message

function logMessage(){
  console.log('This is a message');

}
logMessage() // This is a message


// Function with return
function getMessage(){
  return 'This is a message'
}


// With params
function sum(numb_1, numb_2){
  return numb_1 + numb_2
}

// Function Expression

// multiply(10, 20) // ❌ It works

const multiply = function(numb_1, numb_2){
  return numb_1 * numb_2
}

multiply(10, 20) // ✅ It works



/* 
Arrow Function
- () => {}
Note:
- {}: le graffe sono opzionali se il codice e' su una sola riga
- {}: senza le graffe il return diventa implicito (non serve metterlo)
- (): le tonde sono obbligatiore se ci sono zero o piu di un paramentro
- (): le tonde sono opzionali se la funzione accetta un singolo parametro


*/ 

// arrowMultiply(10, 20) // ❌ It works

// With curly brackets and return (explicit)
const arrowMultiply = (numb_1, numb_2)=>{
  return numb_1 * numb_2
}
arrowMultiply(10, 20)  // ✅ It works



// Without curly and no return (implicit)

const showMultiply = (numb_1, numb_2) => numb_1 * numb_2
showMultiply(20, 10) // ✅ It works







/* FROM FUNCTION TO ARROW FUNCTION  */


// With params
/* function sum(numb_1, numb_2) {
  return numb_1 + numb_2
} */

/* const sum = (numb_1, numb_2)=> {
  return numb_1 + numb_2
} */

//const sum = (numb_1, numb_2) => numb_1 + numb_2


/* function is_even(numb) {
  if (numb % 2 === 0) {
    return 'pari';

  }
  return 'dispari'

} */

/* const is_even = (numb) => {
  if (numb % 2 === 0) {
    return 'pari';

  }
  return 'dispari'
}
 */

/* const is_even = numb => {
  if (numb % 2 === 0) {
    return 'pari';

  }
  return 'dispari'
}
 */

const is_even = numb => numb % 2 === 0

if(is_even(10)){
  console.log('Numero pari');
  
} else {
  console.log('Dispari');
  
}




function is_palindrom(word) {

  /* Reverse the word */
  // ciclo sulla stringa della parola al contrario 

  /*  const reversed_word = word.split('').reverse().join('') */
  const reversed_word = reverse_word(word)
  console.log(reversed_word);


  // Verifico se
  // se la parola rovesciata e' identica alla parola dell'utente
  if (word === reversed_word) {
    // - se si e' un palindromo
    //document.writeln('true')
    return true
  }

  //document.writeln('false')
  return false

}



// Function Scope


//const userName = 'Mario'


/* function greetUser(name){

  const userName = 'Fabio'
  // Wrong ❌
  console.log(userName);

  // Function scope
  const message = 'This is a message'

  console.log(message); // ✅ 'This is a message'
  
  return `ciao ${name}`
} */

//console.log(message); // Reference error

// argument passed to the function call
/* greetUser('Mario')

const userName = 'Mario'
greetUser(userName) */
/* 


const greet = () =>{

}
 */


/* 
function calcAge(){
    const firstName = 'Fabio'
    var age = 45
    let job = 'teacher'


  console.log(firstName);
  console.log(age);
  console.log(job);
}

calcAge() */
//console.log(firstName);
//console.log(age);
//console.log(job);





/* if(10 > 100) {
  // block scope
} 


for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
  // block scope

}

const is_playing = fale
while (is_playing) {
  // block scope
}
 */




// Function + block scope

function calcAge(){
  // local scope (function scope)
  const now = new Date()
  
  if(10 > 5){
    console.log(now);

    const thisVariable = 'Ciao'
    console.log(thisVariable);    
  }
  console.log(thisVariable); // reference error
  console.log(now);
  
  for (let i = 0; i < 10; i++){
    console.log(i);
    

  }

  console.log(i); // reference error
  

}




function calcAge(yob){


}



/*  */
for (let index = 0; index < 10; index++) {
  console.log(index);
}


// 9 < 10 ? true => log
// 10 < 10 ? false

//index = 10


/* if (index === 10) {
  console.log(index);
}
 */



// global variables
a = 0;
b = "buongiorno"
var c = "ciao";

saluta();

console.log("a is " + a); // a is 0
console.log("b is " + b); // b is buongiorno

function saluta() {
  var d = "asd";
  console.log("a is " + a); // a is 0
  var b = a + 1;
  console.log("b is " + b); // b is 1
  console.log(c); // ciao
}
// a is 0
// b is 1
// ciao
// a is 0
// b is buongiorno
