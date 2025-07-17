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