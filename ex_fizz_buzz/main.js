/* 

Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Tools:
- for loop
- % modulus operator
- if/else if / else
- console.log


*/

// # Preparazione (raccolta dati)


// stampa i numeri da 1 a 100,
// - creao un ciclo for partendo da 1 fino a 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
  
  //i % 3 === 0 && i % 5 === 0
  // per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
  if (i % 15 === 0){
    console.log("FizzBuzz");
    
  } else if (i % 3 === 0){
    // per i multipli di 3 stampi “Fizz” al posto del numero
    console.log("Fizz");
    
  } else if (i % 5 === 0) {
    // per i multipli di 5 stampi Buzz.
    console.log('Buzz');
  } else {
    console.log(i);
  }

}

