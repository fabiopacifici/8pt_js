/* 

Il programma dovrà chiedere all'utente il `numero di chilometri` che vuole percorrere e l'`età del passeggero`.

Sulla base di queste informazioni dovrà calcolare il `prezzo totale` del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (`0.21` € al km)

va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.


L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60

Buon divertimento e confermate lettura come al solito :babyyoda: 

*/



// # Preparazione

// Dichiarare una variabile dove salvare il prezzo del biglietto standard
let ticket_price
// Chiedere all'utente il `numero di chilometri` che vuole percorrere
// - Create una variabile per salvare il numero di km da percorrere
//const km = parseFloat(prompt('Type the km')) // Number(promt('Type the km you 
//want to do in your journey'))
const km = 10;

console.log(km);

// Chiedere all'utente `età del passeggero`.
// - creare una variabile per salvare l'eta del passeggero
const passenger_age = 66;
// Creare una variabile per salare il prezzo al km (0.21)
const PRICE_PER_KM = 0.4
// Creare una variabile dove salvare il 20% di sconto (0.2)
const minor_discount = 0.25
// Create una variabile dove salvare il 40% (0.4)
const senior_discount = 0.4
// Create a variable for a final message
let message = 'Prezzo Biglietto Standard'



// # Elaborazione
// Calcolo il prezzo initiale del biglietto (senza sconti)
ticket_price = km * PRICE_PER_KM


// Verificare se età del passeggero e' minore di 18
if(passenger_age < 18){
  // applico lo sconto del 20%
  //ticket_price = ticket_price - (ticket_price * minor_discount)
  ticket_price -= ticket_price * minor_discount
  message = 'Prezzo Biglietto Minorenni'
  
} else if(passenger_age > 65){
  // Altrimenti verifico se l'eta e' maggiore di 65
  // - Applico lo sconto del 40%
  ticket_price -= ticket_price * senior_discount
  message = 'Prezzo Biglietto Over 65'

  
}




// # Output
console.log(message, ticket_price.toFixed(2));
// Arrotondo a due decimali il prezzo finale (number.toFixed)
// Stampo un messaggio per l'utente


const numb = Number(prompt('Type a number'))
const sum = numb + 2
console.log(sum);
