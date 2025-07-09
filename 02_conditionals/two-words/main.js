console.log('hi');

/* 

Inizializziamo due parole a due variabili.
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.


// tools:
- const/let
- if/elseif/else
- string.length
- relational operators (>)
- console.log

*/

// # prepare the data
// create a variable to hold the first word
const firstWord = prompt('Type a name here')
// create a variable to hold the second word
const secondWord = prompt('type another word here ')
// prepare a message to the user

let message = ''
// # elaboration
if(firstWord.length > secondWord.length) {
  // check IF the length of the first word is greather than the second
  // code to run
  message = `The fist word ${firstWord} is longer than the second ${secondWord}`


} else if (secondWord.length > firstWord.length){
  // code to run
  // ELSE IF (otherwise if ) the lenght of the second word is greather than the first
  message = `The second word ${secondWord} is longer than the second ${firstWord}`
} else {
  // code to run
  // ELSE (otherwise) their length is the same
  message = `The two words have the same length - ${firstWord}, ${secondWord}`
}

// #output 
// show a final message
 console.log(message);
 