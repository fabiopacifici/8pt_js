/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(list) {
  const initials = [] // local scope
  
  for (let i = 0; i < list.length; i++) {
    const char = list[i][0]; // block scope
    initials.push(char)
  }

  return initials
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]