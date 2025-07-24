/* 


Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

*/

// select the dom elements
const formEl = document.querySelector('form')
const kmFieldEl = document.getElementById('km-field')
const ageFieldEl = document.getElementById('age-field')
const nameFieldEl = document.getElementById('name-field')

const outputEl = document.getElementById('output')
const PRICE_PER_KM = 0.21
//console.log(formEl, kmFieldEl, ageFieldEl);

// add an event listener to the form (submit)
formEl.addEventListener('submit', (e) => {
  e.preventDefault()

  console.log(e);
  
  // - read the input values
  const nameFieldValue = nameFieldEl.value
  const kmFieldValue = Number(kmFieldEl.value)
  const ageFieldValue = Number(ageFieldEl.value)

  // - log to the console
  console.log(kmFieldValue, ageFieldValue);
  let ticketPrice = PRICE_PER_KM * kmFieldValue

  // IF age is less than 18 
  if (ageFieldValue < 18) {
    // - apply 20%
    ticketPrice = ticketPrice * 0.8

  } else if (ageFieldValue > 65) {
    // ELSE IF the age is greather than 65 
    // - apply 40%
    ticketPrice = ticketPrice * 0.6
  }


  //console.log(ticketPrice);
  const finalPrice = ticketPrice.toFixed(2)
  const cpCode = getRandomNumber(90000, 100000)
  const wagonNumber = getRandomNumber(1, 9)
 
  
  const ticket = {
    name: nameFieldEl,
    price: finalPrice,
    cp: cpCode, 
    wagon: wagonNumber
  }


  //outputEl.innerHTML = generateTicketMarkup(nameFieldValue, finalPrice, cpCode, wagonNumber)
  outputEl.innerHTML = generateTicketMarkup(ticket)


})










/*

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/


/* Helper Functions */

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function generateTicketMarkup(ticket) {

  return `
        <div class="card">
        <div class="card-header">
          ${ticket.name}
        </div>
        <div class="card-body">
          <h3>Your Ticket</h3>
          <div>
            <span>Final Price</span>
            <strong id="price">${ticket.price}&euro;</strong>
          </div>

        </div>
        <div class="card-footer">
          <div>
            <span>CP CODE</span>
            <strong class="cp-code">${ticket.cp}</strong>
          </div>

          <div>
            <span>Wagon Number</span>
            <strong class="wagon-number">${ticket.wagon}</strong>
          </div>
        </div>
      </div>`

}


/* function generateTicketMarkup(nameFieldValue, finalPrice, cpCode, wagonNumber){

  return `
        <div class="card">
        <div class="card-header">
          ${nameFieldValue}
        </div>
        <div class="card-body">
          <h3>Your Ticket</h3>
          <div>
            <span>Final Price</span>
            <strong id="price">${finalPrice}&euro;</strong>
          </div>

        </div>
        <div class="card-footer">
          <div>
            <span>CP CODE</span>
            <strong class="cp-code">${cpCode}</strong>
          </div>

          <div>
            <span>Wagon Number</span>
            <strong class="wagon-number">${wagonNumber}</strong>
          </div>
        </div>
      </div>`

} */