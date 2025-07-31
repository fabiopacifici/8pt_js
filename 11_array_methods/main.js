/* 📌 ForEach loop */

const names = [
  'Wayne Barnett', // 0
  'John Doe',
  'Jane Smith',
]


//console.log(names[0]);


// Loop over the array using a for loop
/* for(let i = 0; i < names.length; i++){
  const name = names[i]
  console.log(name);
  
} */

// with the function keyword
/* names.forEach(function(name, index, arr){
  console.log(name);
  console.log(index);
  console.log(arr);
}) */

// with arrow funciton
/* names.forEach((name, index, arr) => {
  console.log(name);
  console.log(index);
  console.log(arr);
}) */
/* 
names.forEach((name) => {
  console.log(name);
  console.log(index);
  console.log(arr);
})

 */



const products = [
  {
    name: 'Apple',
    price: 1.2,
    quantity: 10
  },
  {
    name: 'Banana',
    price: 0.5,
    quantity: 20
  },
  {
    name: 'Cherry',
    price: 2.0,
    quantity: 15
  }

]

products.forEach((product) => {
  console.log(product.price);
  console.log(`hi there`);


})




/* 📌 Map  */

/* const students = [
  { firstName: 'Mario', lastName: 'Rossi' },
  { firstName: 'Luigi', lastName: 'Verdi' },
  { firstName: 'Margherita', lastName: 'Bianchi' }
];
 */
// Raccogliamo in un array i nomi di tutti gli studenti
// RISULTATO: ['Mario Rossi', 'Luigi Verdi', 'Marghertita Bianchi']

/* const studentsNames = []
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  //console.log(student);
  //console.log(student.firstName); // 1.Mario
  //console.log(student.lastName); // 1.Rossi

  const fullName = `${student.firstName} ${student.lastName}`
  console.log(fullName);
  
  studentsNames.push(fullName)
  
}
console.log(studentsNames); */

/* 
const studentsNames = []
students.forEach((student)=>{
  //console.log(student);
  
  const fullName = `${student.firstName} ${student.lastName}`
  //console.log(fullName);
  studentsNames.push(fullName)
})

console.log(studentsNames); */


/* const studentsNames = students.map((student)=>{
  return `${student.firstName} ${student.lastName}`
})

console.log(studentsNames);
 */

/* const studentsNames = students.map(student => `${student.firstName} ${student.lastName}`)

console.log(studentsNames); */

/* 
const studentsNames = students.map(function(student){
  return `${student.firstName} ${student.lastName}`
})

console.log(studentsNames); */


/* 📌 Filter */

const students = [
  { id: 1, name: 'Marco', year: 1 },
  { id: 1, name: 'Silvia', year: 2 },
  { id: 1, name: 'Ginevra', year: 1 }
];

// Prendiamo gli studenti al primo anno 
// risultato:  [{ id: 1, name: 'Marco', year: 1 },{ id: 1, name: 'Ginevra', year: 1 }]


// do it with a For loop?
/* const freshers = []
for (let i = 0; i < students.length; i++) {
  const student = students[i];

  // se lo studente e' al primo anno
  if(student.year === 1){
    // - allora lo voglio nella nuova array
    freshers.push(student)
  }
}
console.log(freshers); */



// do it with a forEach?
const freshers = []
students.forEach((student) => {
  // se lo studente e' al primo anno
  if (student.year === 1) {
    // - allora lo voglio nella nuova array
    freshers.push(student)
  }
})
console.log(freshers);


// with filter

/* const filteredStudents = students.filter((student) => {
  // se lo studente e' al primo anno
  if (student.year === 1) {
    // - allora lo voglio nella nuova array
    return true
  }
  return false
}) */

/* const filteredStudents = students.filter(student => {
  // se lo studente e' al primo anno
  return student.year === 1
}) */

const filteredStudents = students.filter(student => student.year === 1)


console.log(filteredStudents);


// 📌 find


const people = [
  { id: 4, name: 'Paolo', age: 32 },
  { id: 3, name: 'Clelia', age: 34 },
];

// Recupera la persona  con id 3
//RISULTATO: { id: 3, name: 'Clelia', age: 34 }
//console.log(people[1])

// with for

/*
let foundPerson

for (let i = 0; i < people.length; i++) {
  // recupero l'elemento in questa iterazione
  const person = people[i];
  // leggo il valore della proprieta' id
  console.log(person.id);

  // se il campo id nell'oggetto person e' 3
  // - lo salvo in una variabile
  if(person['id'] === 3){
    // i found the person
    foundPerson = person
  }
}
 */


// with for each
/* people.forEach(person => {
  if (person.id === 3) {
    // i found the person
    foundPerson = person
  }
}) */


  // with find
/* const foundPerson = people.find(person => {
  if (person.id === 3) {
    // i found the person
    return true
  }
}) */
const foundPerson = people.find(person =>  person.id === 3)
console.log(foundPerson);









