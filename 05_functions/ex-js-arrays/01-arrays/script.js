let teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil', //3
  'Carlo', // 4
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);


// 👁️ 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = 'Patrick'
console.log(teachers);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher);



// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher);


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa')
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis')


// 👁️ 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

/* console.log(teachers);
console.log([]);
console.log(teachers.length);
console.log([].length);
console.log(teachers.length === 0); */

let isTeachersEmpty = teachers.length === 0;
/* 
if (teachers.length === 0){ 
  isTeachersEmpty = true 
  console.log('array vuoto');
  
} else {
  isTeachersEmpty = false 
  console.log('array pieno');
  
} */
 
console.log(isTeachersEmpty);
